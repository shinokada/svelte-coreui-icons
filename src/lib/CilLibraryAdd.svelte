<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil library add';
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
    d="M48,464V144H16V472a24.027,24.027,0,0,0,24,24H368V464H48Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M144,400H112V80H80V408a24.027,24.027,0,0,0,24,24H432V400H144Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M472,16H168a24.027,24.027,0,0,0-24,24V344a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V40A24.027,24.027,0,0,0,472,16Zm-8,320H176V48H464Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="304 288 336 288 336 204 420 204 420 172 336 172 336 88 304 88 304 172 220 172 220 204 304 204 304 288"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil library add';
-->
