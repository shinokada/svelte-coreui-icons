<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil toggle on';
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
    d="M368,128H144a128,128,0,0,0,0,256H368a128,128,0,0,0,0-256Zm0,224H144a96,96,0,0,1,0-192H368a96,96,0,0,1,0,192Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M368,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,368,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,368,288Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil toggle on';
-->
