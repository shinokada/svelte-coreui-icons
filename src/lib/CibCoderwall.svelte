<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib coderwall';
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
    d="M28.473 24.943c1.943 0 3.527 1.584 3.527 3.531 0 1.943-1.584 3.527-3.527 3.527-1.947 0-3.531-1.584-3.531-3.527 0-1.947 1.584-3.531 3.531-3.531zM16 12.473c1.948 0 3.527 1.579 3.527 3.527s-1.579 3.527-3.527 3.527c-1.948 0-3.527-1.579-3.527-3.527s1.579-3.527 3.527-3.527zM28.473 12.473c1.943 0 3.527 1.579 3.527 3.527s-1.584 3.527-3.527 3.527c-1.947 0-3.531-1.579-3.531-3.527s1.584-3.527 3.531-3.527zM16 0c1.948 0 3.527 1.579 3.527 3.527 0 1.947-1.579 3.531-3.527 3.531s-3.527-1.584-3.527-3.531c0-1.943 1.579-3.527 3.527-3.527zM3.527 0c1.947 0 3.531 1.579 3.531 3.527 0 1.947-1.584 3.531-3.531 3.531-1.943 0-3.527-1.584-3.527-3.531 0-1.943 1.584-3.527 3.527-3.527zM28.473 0c1.943 0 3.527 1.579 3.527 3.527 0 1.947-1.584 3.531-3.527 3.531-1.947 0-3.531-1.584-3.531-3.531 0-1.943 1.584-3.527 3.531-3.527z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib coderwall';
-->
