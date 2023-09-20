<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil map';
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
    d="M478.465,89.022,329.6,47.382,180.3,89.438,41.459,50.052h0A20,20,0,0,0,16,69.293v340.6a24.093,24.093,0,0,0,17.449,23.089l146.817,41.65,149.365-42.074,140.983,39.436A20,20,0,0,0,496,452.728V112.135A24.08,24.08,0,0,0,478.465,89.022ZM163,436.466,48,403.842V85.17l115,32.624Zm150.615-32.647L195,437.231V118.542L313.615,85.13ZM464,436.91,345.615,403.8V85.089L464,118.2Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil map';
-->
