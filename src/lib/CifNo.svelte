<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 219;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif no';
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
  viewBox="0 0 301 219"
>
  <g fill="none">
    <path fill="#EF2B2D" d="M.5.409h300v218.182H.5z" />
    <path fill="#FFF" d="M82.318.409h54.545v218.182H82.318z" />
    <path fill="#FFF" d="M.5 82.227h300v54.545H.5z" />
    <path fill="#002868" d="M95.955.409h27.273v218.182H95.955z" />
    <path fill="#002868" d="M.5 95.863h300v27.273H.5z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 219;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif no';
-->
