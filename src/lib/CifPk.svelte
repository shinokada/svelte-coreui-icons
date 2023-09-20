<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif pk';
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
    <path fill="#FFF" d="M.5.5h300v200H.5z" />
    <path fill="#01411C" d="M75.5.5h225v200h-225z" />
    <circle cx="188" cy="100.5" r="60" fill="#FFF" />
    <circle cx="203.337" cy="86.868" r="55" fill="#01411C" />
    <path fill="#FFF" d="M209.879 55.603l25.274 28.433-37.16-8.147 34.852-15.251-19.232 32.824z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 201;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif pk';
-->
