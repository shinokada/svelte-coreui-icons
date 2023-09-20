<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil sun';
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
    d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"
  />
  <rect width="32" height="48" x="240" y="16" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="48" x="240" y="448" fill="var(--ci-primary-color, {color})" />
  <rect width="48" height="32" x="448" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="48" height="32" x="16" y="240" fill="var(--ci-primary-color, {color})" />
  <rect
    width="32"
    height="45.255"
    x="400"
    y="393.373"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-45 416 416)"
  />
  <rect
    width="32.001"
    height="45.255"
    x="80"
    y="73.373"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-45 96 96)"
  />
  <rect
    width="45.255"
    height="32"
    x="73.373"
    y="400"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-45.001 96.002 416.003)"
  />
  <rect
    width="45.255"
    height="32.001"
    x="393.373"
    y="80"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-45 416 96)"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil sun';
-->
