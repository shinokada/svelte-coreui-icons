<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil action redo';
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
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="361.376 495.163 226.753 360.54 249.38 337.913 361.376 449.909 473.373 337.913 496 360.54 361.376 495.163"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M377.377,472.52h-32V196.426C345.377,114.584,278.794,48,196.952,48,113.723,48,48.526,111.106,48.526,191.667h-32c0-48.024,18.85-92.569,53.079-125.429C103.35,33.842,148.576,16,196.952,16c99.487,0,180.425,80.938,180.425,180.426Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil action redo';
-->
