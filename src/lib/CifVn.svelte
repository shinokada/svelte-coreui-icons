<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif vn';
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
  viewBox="0 0 301 201"
>
  <g fill="none">
    <path fill="#DA251D" d="M.5.5h300v200H.5z" />
    <path
      fill="#FF0"
      d="M102.168 83.815l26.481 19.24-10.115 31.131 26.482-19.239 26.481 19.239-10.115-31.131 26.482-19.24h-32.841l-10.007-30.798-10.007 30.798z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 201;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif vn';
-->
