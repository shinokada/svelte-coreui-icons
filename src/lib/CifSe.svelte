<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 189;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif se';
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
  viewBox="0 0 301 189"
>
  <g fill="none">
    <path fill="#005293" d="M.5.75h300v187.5H.5z" />
    <path fill="#FECB00" d="M94.25.75h37.5v187.5h-37.5z" />
    <path fill="#FECB00" d="M.5 75.75h300v37.5H.5z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 189;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif se';
-->
