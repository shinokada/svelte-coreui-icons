<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil spa';
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
    d="M382.988,237.57a251.854,251.854,0,0,0-102.8-180.91L251.657,36,224.922,56.79A250.836,250.836,0,0,0,128.643,237.5,176.226,176.226,0,0,0,96,234.451H16V300c0,97.047,78.953,176,176,176H320c97.047,0,176-78.953,176-176V234.451H416A176.161,176.161,0,0,0,382.988,237.57ZM244.568,82.05,252.343,76l9.08,6.575a219.732,219.732,0,0,1,90.163,164.079A177.028,177.028,0,0,0,256,337.171a177.022,177.022,0,0,0-95.824-90.6A217.523,217.523,0,0,1,244.568,82.05ZM240,444H192c-79.4,0-144-64.6-144-144V266.451H96c79.4,0,144,64.6,144,144ZM464,300c0,79.4-64.6,144-144,144H272V410.451c0-79.4,64.6-144,144-144h48Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil spa';
-->
