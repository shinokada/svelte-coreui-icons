<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 181;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif gy';
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
  viewBox="0 0 301 181"
>
  <g fill="none">
    <path fill="#009E49" d="M.5.5h300v180H.5z" />
    <path fill="#FFF" d="M.5.5l300 90-300 90z" />
    <path fill="#FCD116" d="M.5 8.33L274.1 90.5.5 172.67z" />
    <path fill="#000" d="M.5.5l150 90-150 90z" />
    <path fill="#CE1126" d="M.5 11l132.51 79.5L.5 170z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 181;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif gy';
-->
