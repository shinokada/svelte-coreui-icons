<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 227;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif dk';
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
  viewBox="0 0 301 227"
>
  <g fill="none">
    <path fill="#C60C30" d="M.5.5h300v226H.5z" />
    <path fill="#FFF" d="M96.791.5h32.354v226H96.791z" />
    <path fill="#FFF" d="M300.5 97.323v32.354H.5V97.323z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 227;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif dk';
-->
