<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil factory';
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
    d="M459.26,96,328,225.7V96H293.475L168,223.267V16H16V496H496V96ZM464,464H48V48h88V264h36.778L296,139.018V264h38.764L464,136.3Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="136 328 136 336 168 336 168 328 168 304 136 304 136 328"
  />
  <rect width="32" height="32" x="136" y="376" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="216 328 216 336 248 336 248 328 248 304 216 304 216 328"
  />
  <rect width="32" height="32" x="216" y="376" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="296 328 296 336 328 336 328 328 328 304 296 304 296 328"
  />
  <rect width="32" height="32" x="296" y="376" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="376" y="304" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="376" y="376" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil factory';
-->
