<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil compass';
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
    d="M209.686,304.963l119.051,59.424a24,24,0,0,0,32.182-32.21l-59.5-118.948L182.333,153.584a24,24,0,0,0-32.216,32.189Zm67.88-67.892,44.006,87.975L233.535,281.1l-44.056-88.149Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M256,496c132.548,0,240-107.452,240-240S388.548,16,256,16,16,123.452,16,256,123.452,496,256,496ZM48.353,244C54.269,140.018,136.553,56.476,240,48.606V115h32V48.606C375.447,56.476,457.731,140.018,463.647,244H399.971v32h63.068C453.474,376.238,372.78,455.727,272,463.394V403H240v60.394C139.22,455.727,58.526,376.238,48.961,276h63.01V244Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil compass';
-->
