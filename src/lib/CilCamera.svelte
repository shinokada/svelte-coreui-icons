<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil camera';
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
    d="M471.993,112h-89.2L366.551,65.25a32.023,32.023,0,0,0-30.229-21.5H175.241a31.991,31.991,0,0,0-30.294,21.691L129.1,112h-89.1a24.027,24.027,0,0,0-24,24V448a24.027,24.027,0,0,0,24,24H471.993a24.027,24.027,0,0,0,24-24V136A24.027,24.027,0,0,0,471.993,112Zm-8,328H48.007V144h104.01l23.224-68.25H336.322L360.032,144H463.993Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M256,168A114,114,0,1,0,370,282,114.13,114.13,0,0,0,256,168Zm0,196a82,82,0,1,1,82-82A82.093,82.093,0,0,1,256,364Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil camera';
-->
