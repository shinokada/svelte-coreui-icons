<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil battery alert';
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
    d="M432,176V119.59A23.825,23.825,0,0,0,408,96H240v32H400v80h64V312H400v80H47.986V128H112V96H39.986a23.825,23.825,0,0,0-24,23.59V400.41a23.825,23.825,0,0,0,24,23.59H408a23.825,23.825,0,0,0,24-23.59V344h64V176Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="192 64 192 56 160 56 160 64 160 256 192 256 192 64"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="192 304 192 288 160 288 160 304 160 320 192 320 192 304"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil battery alert';
-->
