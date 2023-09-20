<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil calendar';
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
    d="M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z"
  />
  <rect width="32" height="32" x="112" y="224" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="200" y="224" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="280" y="224" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="368" y="224" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="112" y="296" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="200" y="296" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="280" y="296" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="368" y="296" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="112" y="368" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="200" y="368" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="280" y="368" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="368" y="368" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil calendar';
-->
