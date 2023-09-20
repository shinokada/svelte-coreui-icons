<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil contact';
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
    d="M472,48H40A24.028,24.028,0,0,0,16,72V440a24.028,24.028,0,0,0,24,24h88V405.178A20.01,20.01,0,0,1,138.284,387.7l91.979-51.123L200,260.919V200a56,56,0,0,1,112,0v60.919l-30.263,75.655L373.716,387.7h0A20.011,20.011,0,0,1,384,405.178V464h88a24.028,24.028,0,0,0,24-24V72A24.028,24.028,0,0,0,472,48Zm-8,384H416V405.178a52.027,52.027,0,0,0-26.738-45.451h0L321.915,322.3,344,267.081V200a88,88,0,0,0-176,0v67.081L190.085,322.3l-67.347,37.432A52.027,52.027,0,0,0,96,405.178V432H48V80H464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil contact';
-->
