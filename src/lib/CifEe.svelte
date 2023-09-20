<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 191;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif ee';
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
  viewBox="0 0 301 191"
>
  <g fill="none">
    <path fill="#4891D9" d="M.5.5h300v190H.5z" />
    <path fill="#000" d="M.5 63.833h300V190.5H.5z" />
    <path fill="#FFF" d="M.5 127.166h300v63.333H.5z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 191;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif ee';
-->
