<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil headphones';
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
    d="M448,216H400V184c0-79.4-64.6-144-144-144S112,104.6,112,184v32H64a48.055,48.055,0,0,0-48,48V392a48.055,48.055,0,0,0,48,48h48a32.036,32.036,0,0,0,32-32V184a112,112,0,0,1,224,0V408a32.036,32.036,0,0,0,32,32h48a48.055,48.055,0,0,0,48-48V264A48.055,48.055,0,0,0,448,216ZM112,408H64a16.019,16.019,0,0,1-16-16V264a16.019,16.019,0,0,1,16-16h48v56h.008l.012,104Zm352-16a16.019,16.019,0,0,1-16,16H400V248h48a16.019,16.019,0,0,1,16,16Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil headphones';
-->
