<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 159;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif lr';
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
  viewBox="0 0 301 159"
>
  <defs>
    <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
      <stop offset="0%" stop-color="#FFF" />
      <stop offset="100%" />
    </linearGradient>
  </defs>
  <g fill="none">
    <path fill="#BF0A30" d="M.5.552h300v157.895H.5z" />
    <path
      fill="url(#a)"
      stroke="#FFF"
      stroke-width="13.158"
      d="M.5 22.084h300M.5 50.792h300M.5 79.5h300M.5 108.208h300M.5 136.916h300"
    />
    <path fill="#002868" d="M.5.552h71.77v71.77H.5z" />
    <path
      fill="#FFF"
      d="M15.908 29.784l12.656 9.195-4.834 14.878 12.655-9.195 12.656 9.195-4.834-14.878 12.656-9.195H41.219l-4.834-14.877-4.834 14.877z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 159;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif lr';
-->
