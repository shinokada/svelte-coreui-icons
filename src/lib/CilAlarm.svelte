<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil alarm';
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
    d="M256,80C141.125,80,48,173.125,48,288s93.125,208,208,208,208-93.125,208-208S370.875,80,256,80ZM380.451,412.451A176,176,0,1,1,432,288,174.849,174.849,0,0,1,380.451,412.451Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="272 160 240 160 240 295.69 326.005 364.494 345.995 339.506 272 280.31 272 160"
  />
  <rect
    width="184.174"
    height="32.001"
    x="15.913"
    y="60"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-34.38 108.002 76)"
  />
  <rect
    width="32.001"
    height="184.174"
    x="388"
    y="-16.087"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-55.619 404.003 76)"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil alarm';
-->
