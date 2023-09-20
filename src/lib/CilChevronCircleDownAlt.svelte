<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil chevron circle down alt';
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
    d="M256,496A240,240,0,0,1,86.294,86.294,240,240,0,0,1,425.706,425.706,238.43,238.43,0,0,1,256,496Zm0-448C141.309,48,48,141.309,48,256s93.309,208,208,208,208-93.309,208-208S370.691,48,256,48Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="256 342.627 132.687 219.313 155.313 196.687 256 297.372 356.687 196.687 379.313 219.313 256 342.627"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil chevron circle down alt';
-->
