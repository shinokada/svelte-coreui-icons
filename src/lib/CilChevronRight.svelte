<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil chevron right';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {role}
  {...$$restProps}
  aria-label={ariaLabel}
  fill={color}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 512 512"
>
  <path
    fill="var(--ci-primary-color, {color})"
    d="M183.505,496,86.237,398.73,229.412,255.556,86.237,112.38l97.268-97.27L326.732,158.338l11.316,11.209,85.9,85.9,0,0,.051.05-11.311,11.419-85.9,85.9-.055-.054Zm-52.013-97.27,52.013,52.014L326.629,307.62l.055.054L378.8,255.556l-52.127-52.128-11.308-11.2L183.505,60.366,131.492,112.38,274.667,255.556Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil chevron right';
-->
