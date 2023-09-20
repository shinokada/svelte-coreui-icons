<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width;
  export let height;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif ga';
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
  viewBox="0 0 301 225"
>
  <g fill="none">
    <path fill="#3A75C4" d="M.5 0h300v225H.5z" />
    <path fill="#FCD116" d="M.5 0h300v150H.5z" />
    <path fill="#009E60" d="M.5 0h300v75H.5z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width;
@prop export let height;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif ga';
-->
