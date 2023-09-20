<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 259;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif ne';
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
  viewBox="0 0 301 259"
>
  <g fill="none">
    <path fill="#0DB02B" d="M.5.928h300v257.143H.5z" />
    <path fill="#FFF" d="M.5.928h300v171.429H.5z" />
    <path fill="#E05206" d="M.5.928h300v85.714H.5z" />
    <circle cx="150.5" cy="129.5" r="36.429" fill="#E05206" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 259;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif ne';
-->
