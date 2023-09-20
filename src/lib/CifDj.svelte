<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif dj';
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
    <path fill="#6AB2E7" d="M.5.5h300v200H.5z" />
    <path fill="#12AD2B" d="M.5 100.5h300v100H.5z" />
    <path fill="#FFF" d="M.5.5v200l86.603-50 86.603-50-86.603-50z" />
    <path
      fill="#D7141A"
      d="M66.787 75.5l6.205 19.098h20.081l-16.246 11.803 6.205 19.099-16.246-11.804L50.541 125.5l6.206-19.099L40.5 94.598h20.081z"
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
@prop export let ariaLabel = 'cif dj';
-->
