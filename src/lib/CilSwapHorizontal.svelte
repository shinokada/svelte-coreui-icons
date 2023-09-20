<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil swap horizontal';
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
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="364.118 67.313 433.373 136.568 160 136.568 160 168.568 433.373 168.568 364.118 237.823 386.745 260.45 494.628 152.568 386.745 44.687 364.118 67.313"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="147.882 267.882 125.255 245.255 17.373 353.137 125.255 461.02 147.882 438.393 78.627 369.137 352 369.137 352 337.137 78.627 337.137 147.882 267.882"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil swap horizontal';
-->
