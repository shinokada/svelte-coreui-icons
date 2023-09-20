<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil smile plus';
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
    points="432 80 432 16 400 16 400 80 336 80 336 112 400 112 400 176 432 176 432 112 496 112 496 80 432 80"
  />
  <rect width="40" height="40" x="112" y="256" fill="var(--ci-primary-color, {color})" />
  <rect width="40" height="40" x="248" y="256" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M203.438,384h-6.875a63.691,63.691,0,0,1-59.326-40h-34.47l4.662,11.653A95.541,95.541,0,0,0,196.563,416h6.875a95.54,95.54,0,0,0,89.133-60.347L297.233,344h-34.47A63.691,63.691,0,0,1,203.438,384Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M200,128C98.542,128,16,210.542,16,312S98.542,496,200,496s184-82.542,184-184S301.458,128,200,128Zm0,336c-83.813,0-152-68.187-152-152s68.187-152,152-152,152,68.187,152,152S283.813,464,200,464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil smile plus';
-->
