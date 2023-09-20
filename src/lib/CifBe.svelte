<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 261;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif be';
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
  viewBox="0 0 301 261"
>
  <g fill="none">
    <path fill="#000" d="M.5.5h300v260H.5z" />
    <path fill="#FAE042" d="M100.5.5h100v260h-100z" />
    <path fill="#ED2939" d="M200.5.5h100v260h-100z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 261;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif be';
-->
