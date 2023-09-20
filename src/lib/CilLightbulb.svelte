<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil lightbulb';
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
    d="M252.592,496h6.816a108.122,108.122,0,0,0,108-108V332.308a177.481,177.481,0,0,0,66.37-138.531C433.778,95.751,354.027,16,256,16S78.222,95.751,78.222,193.777a177.477,177.477,0,0,0,66.371,138.531V388A108.121,108.121,0,0,0,252.592,496Zm6.816-32h-6.816a76.106,76.106,0,0,1-70.631-48H330.04A76.107,76.107,0,0,1,259.408,464Zm76-80H176.593V344H335.408ZM110.222,193.777C110.222,113.4,175.618,48,256,48s145.778,65.4,145.778,145.777a146.392,146.392,0,0,1-59.817,117.737L341.3,312H170.7l-.665-.486A146.394,146.394,0,0,1,110.222,193.777Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil lightbulb';
-->
