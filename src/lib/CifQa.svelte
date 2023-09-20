<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 119;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif qa';
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
  viewBox="0 0 301 119"
>
  <g fill="none">
    <path fill="#8D1B3D" d="M.5.445h300v118.11H.5z" />
    <path
      fill="#FFF"
      d="M.5.445v118.11h94.488l24.003-6.558-24.003-6.57 24.003-6.558-24.003-6.558 24.003-6.57-24.003-6.558 24.003-6.558-24.003-6.57 24.003-6.558-24.003-6.558 24.003-6.57-24.003-6.558 24.003-6.558-24.003-6.57 24.003-6.558-24.003-6.558 24.003-6.57L94.988.439H.5z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 119;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif qa';
-->
