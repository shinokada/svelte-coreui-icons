<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil chevron top';
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
    d="M398.986,424.715,256,281.73,113.014,424.715l-97.17-97.169L158.8,184.59l11.29-11.4L256,87.285l5.481,5.531,5.89,5.834,85.907,85.908-.054.054L496.156,327.546ZM61.1,327.546l51.915,51.915L256,236.474,398.986,379.461,450.9,327.546,307.863,184.508l.054-.053-51.812-51.813-.051.051-.1-.106-51.866,51.869-11.312,11.418Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil chevron top';
-->
