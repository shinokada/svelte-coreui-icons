<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil router';
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
    d="M443.057,132.943l22.634-22.634a143.764,143.764,0,0,0-211.382,0l22.634,22.634a111.838,111.838,0,0,1,166.114,0Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M299.615,155.615l22.7,22.7a47.913,47.913,0,0,1,75.362,0l22.7-22.7a79.829,79.829,0,0,0-120.77,0Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M472,280H376V216H344v64H40a24.028,24.028,0,0,0-24,24V416a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V304A24.028,24.028,0,0,0,472,280Zm-8,128H48V312H464Z"
  />
  <rect width="32" height="32" x="96" y="344" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="176" y="344" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="256" y="344" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil router';
-->
