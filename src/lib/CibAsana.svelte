<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib asana';
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
    d="M25.042 16.87c-3.844 0-6.964 3.115-6.964 6.958 0 3.849 3.12 6.964 6.964 6.964 3.839 0 6.958-3.12 6.958-6.964 0-3.839-3.115-6.958-6.958-6.958zM6.958 16.87c-3.839 0-6.958 3.115-6.958 6.958 0 3.849 3.12 6.964 6.958 6.964 3.844 0 6.964-3.12 6.964-6.964 0-3.839-3.115-6.958-6.964-6.958zM22.958 8.172c0 3.844-3.115 6.958-6.958 6.958s-6.958-3.115-6.958-6.958c0-3.844 3.115-6.964 6.958-6.964s6.958 3.12 6.958 6.964z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib asana';
-->
