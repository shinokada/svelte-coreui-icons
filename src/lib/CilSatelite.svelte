<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil satelite';
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
    d="M16,496H496V16H16Zm448-32H438.627l-104-104,54.912-54.911L464,379.55ZM48,48H464V334.3l-74.461-74.461L312,337.373l-112-112-152,152Zm0,374.627,152-152L393.373,464H48Z"
  />
  <path fill="var(--ci-primary-color, {color})" d="M120,80H80v40A40,40,0,0,0,120,80Z" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M80,163.661V196.6A152.468,152.468,0,0,0,196.6,80H163.661A120.471,120.471,0,0,1,80,163.661Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil satelite';
-->
