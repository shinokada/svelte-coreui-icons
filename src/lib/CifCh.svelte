<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 301;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif ch';
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
  viewBox="0 0 301 301"
>
  <g fill="none">
    <path fill="red" d="M.5.5h300v300H.5z" />
    <path fill="#FFF" d="M56.75 122.375h187.5v56.25H56.75z" />
    <path fill="#FFF" d="M122.375 56.75h56.25v187.5h-56.25z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 301;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif ch';
-->
