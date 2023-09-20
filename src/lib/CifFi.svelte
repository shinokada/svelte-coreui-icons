<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 185;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif fi';
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
  viewBox="0 0 301 185"
>
  <g fill="none">
    <path fill="#FFF" d="M.5.833h300v183.333H.5z" />
    <path fill="#003580" d="M.5 67.5h300v50H.5z" />
    <path fill="#003580" d="M83.834.833h50v183.333h-50z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 185;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif fi';
-->
