<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif tz';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
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
  <defs>
    <path id="a" d="M.5.5h300v200H.5z" />
    <path id="c" d="M.5.5h300v200H.5z" />
  </defs>
  <g fill="none" fill-rule="evenodd">
    <path fill="#1EB53A" fill-rule="nonzero" d="M.5.5h300l-300 200" />
    <path fill="#00A3DD" fill-rule="nonzero" d="M.5 200.5h300V.5" />
    <mask id="b" fill="#fff">
      <use xlink:href="#a" />
    </mask>
    <path stroke="#FCD116" stroke-width={width} d="M.5 200.5l300-200" mask="url(#b)" />
    <mask id="d" fill="#fff">
      <use xlink:href="#c" />
    </mask>
    <path stroke="#000" stroke-width={width} d="M.5 200.5l300-200" mask="url(#d)" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 201;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif tz';
-->
