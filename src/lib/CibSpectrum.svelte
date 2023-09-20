<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib spectrum';
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
    d="M0 13.599c0 1.328 1.073 2.401 2.401 2.401h2.401c6.181 0 11.197 5.016 11.197 11.197v2.401c0 1.328 1.073 2.401 2.401 2.401h11.197c1.328 0 2.401-1.073 2.401-2.401v-2.401c0-15.020-12.177-27.197-27.197-27.197h-2.401c-1.328 0-2.401 1.073-2.401 2.401z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib spectrum';
-->
