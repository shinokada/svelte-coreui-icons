<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 177;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif cv';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  {role}
  {...$$restProps}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 301 177"
>
  <g fill="none">
    <path fill="#003893" d="M.501.5h300v176.471h-300z" />
    <path fill="#FFF" d="M.501 88.735h300v44.118h-300z" />
    <path fill="#CE1126" d="M.501 103.441h300v14.706h-300z" />
    <path
      fill="#FC0"
      d="M104.609 63.95l5.186 3.768-1.981 6.097 5.187-3.768 5.186 3.768-1.981-6.097 5.186-3.768h-6.41l-1.981-6.097-1.981 6.097zM78.724 72.521l5.186 3.768-1.981 6.097 5.186-3.768 5.186 3.768-1.981-6.097 5.187-3.768h-6.411l-1.981-6.097-1.981 6.097zM130.307 72.254l5.186 3.768-1.982 6.097 5.187-3.768 5.186 3.768-1.981-6.097 5.187-3.768h-6.411l-1.981-6.097-1.981 6.097zM146.374 94.538l5.186 3.768-1.981 6.097 5.186-3.768 5.187 3.768-1.981-6.097 5.186-3.768h-6.411l-1.981-6.097-1.981 6.097zM146.374 121.597l5.186 3.768-1.981 6.097 5.186-3.768 5.187 3.768-1.981-6.097 5.186-3.768h-6.411l-1.981-6.097-1.981 6.097zM130.492 143.95l5.186 3.768-1.982 6.097 5.187-3.768 5.186 3.768-1.981-6.097 5.187-3.768h-6.411l-1.981-6.097-1.981 6.097zM104.623 152.192l5.186 3.768-1.981 6.097 5.186-3.768 5.186 3.768-1.98-6.097 5.186-3.768h-6.411l-1.981-6.097-1.981 6.097zM78.332 143.616l5.186 3.768-1.981 6.097 5.187-3.768 5.186 3.768-1.981-6.097 5.186-3.768h-6.41l-1.981-6.097-1.981 6.097zM62.784 121.464l5.186 3.768-1.982 6.097 5.187-3.768 5.186 3.768-1.981-6.097 5.187-3.768h-6.411l-1.981-6.097-1.981 6.097zM62.853 94.284l5.186 3.768-1.981 6.097 5.187-3.768 5.186 3.768-1.981-6.097 5.186-3.768h-6.411l-1.98-6.097-1.982 6.097z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 177;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif cv';
-->
