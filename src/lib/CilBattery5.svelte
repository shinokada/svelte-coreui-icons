<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil battery 5';
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
  <rect width="32" height="200" x="80" y="160" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="200" x="144" y="160" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="200" x="208" y="160" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="200" x="272" y="160" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="200" x="336" y="160" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M432,176V119.59A23.825,23.825,0,0,0,408,96H39.986a23.825,23.825,0,0,0-24,23.59V400.41a23.825,23.825,0,0,0,24,23.59H408a23.825,23.825,0,0,0,24-23.59V344h64V176Zm32,136H400v80H47.986V128H400v80h64Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil battery 5';
-->
