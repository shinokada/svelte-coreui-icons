<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 300;
  export let height = ctx.height || 200;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif ye';
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
  viewBox="0 0 300 200"
>
  <g fill="none">
    <path fill="#FFF" d="M0 0h300v200H0z" />
    <path fill="#CE1126" d="M0 0h300v66.667H0z" />
    <path fill="#000" d="M0 133.333h300V200H0z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let width = ctx.width || 300;
@prop export let height = ctx.height || 200;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif ye';
-->
