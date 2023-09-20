<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 300;
  export let height = ctx.height || 200;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif so';
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
  viewBox="0 0 300 200"
>
  <g fill="none">
    <path fill="#4189DD" d="M0 0h300v200H0z" />
    <path
      fill="#FFF"
      d="M104.208 85.122l28.301 20.561-10.81 33.27L150 118.391l28.301 20.562-10.81-33.27 28.301-20.561H160.81L150 51.852l-10.81 33.27z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 300;
@prop export let height = ctx.height || 200;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif so';
-->
