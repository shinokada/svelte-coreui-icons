<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib micro blog';
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
    d="M28.531 23.599c-2.667 3.469-1.333 6.401-0.395 7.871 0.395 0.531-0.136 0.531-0.401 0.531-2.204-0.401-4.141-1.708-5.333-3.599-0.265-0.136-0.401-0.265-0.667-0.136-1.871 0.537-3.735 0.932-5.735 0.803-8.803 0-16-6.401-16-14.401s7.197-14.667 16-14.667c8.803 0 16 6.531 16 14.667 0 3.333-1.333 6.401-3.469 8.932zM16 18.667l4.265 2.932c0.385 0.229 0.865-0.088 0.803-0.531l-1.599-5.068 4.129-3.197c0.193-0.292 0.063-0.688-0.265-0.803h-5.197l-1.735-5.068c-0.213-0.239-0.589-0.239-0.803 0l-1.735 5.068h-5.333c-0.4 0.145-0.479 0.683-0.129 0.932l4 3.204-1.333 4.932c-0.011 0.353 0.323 0.62 0.667 0.531z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib micro blog';
-->
