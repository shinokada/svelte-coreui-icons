<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 181;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif bd';
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
    <path fill="#006A4E" d="M.5.5h300v180H.5z" />
    <circle cx="135.5" cy="90.5" r="60" fill="#F42A41" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 181;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif bd';
-->
