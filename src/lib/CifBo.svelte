<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 205;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif bo';
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
  viewBox="0 0 301 205"
>
  <g fill="none">
    <path fill="#007934" d="M.5.227h300v204.545H.5z" />
    <path fill="#F9E300" d="M.5.227h300v136.364H.5z" />
    <path fill="#D52B1E" d="M.5.227h300v68.182H.5z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 205;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif bo';
-->
