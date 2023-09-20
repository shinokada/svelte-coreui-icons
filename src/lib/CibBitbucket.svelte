<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib bitbucket';
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
  viewBox="0 0 32 32"
>
  <path
    d="M1.036 1.615c-0.563-0.010-1.026 0.448-1.036 1.010 0 0.063 0.005 0.12 0.016 0.177l4.349 26.417c0.109 0.667 0.688 1.156 1.365 1.161h20.87c0.51 0.005 0.943-0.359 1.026-0.859l4.359-26.708c0.094-0.557-0.286-1.083-0.844-1.172-0.063-0.010-0.12-0.016-0.177-0.016zM19.359 20.703h-6.661l-1.802-9.417h10.078z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib bitbucket';
-->
