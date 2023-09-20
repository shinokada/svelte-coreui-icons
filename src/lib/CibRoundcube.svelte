<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib roundcube';
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
    d="M26.531 11.469c0 1.599-0.396 3.063-0.932 4.396l0.932-0.531 4.536-2.667-3.599-2c-0.401-6-5.333-10.667-11.469-10.667s-11.068 4.667-11.469 10.667l-3.599 2.135 4.135 2.396 1.198 0.667c-0.667-1.333-0.932-2.797-0.932-4.396 0-5.87 4.802-10.536 10.531-10.536 6 0 10.667 4.667 10.667 10.536zM0.135 23.068l15.464 8.932v-9.865l-15.464-8.938zM16.401 22.135v9.865l15.464-8.932v-9.87z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib roundcube';
-->
