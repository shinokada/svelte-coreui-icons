<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib mix';
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
    d="M6.401 8.136v20.197c0 1.803-1.401 3.136-3.204 3.136-1.796 0-3.197-1.401-3.197-3.136v-28.333h32v17.803c0 1.728-1.469 3.129-3.197 3.129-1.803 0-3.272-1.401-3.272-3.129v-1.605c0-1.796-1.395-3.129-3.197-3.129-1.516 0-2.828 1.068-3.136 2.5v5.099c0 1.803-1.463 3.136-3.197 3.136-1.803 0-3.197-1.401-3.197-3.136v-12.333c0-1.735-1.469-3.136-3.204-3.136-1.667-0.004-3.063 1.272-3.197 2.939z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib mix';
-->
