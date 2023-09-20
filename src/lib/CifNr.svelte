<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 151;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif nr';
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
  viewBox="0 0 301 151"
>
  <g fill="none">
    <path fill="#002B7F" d="M.5.5h300v150H.5z" />
    <path fill="#FFC61E" d="M.5 69.25h300v12.5H.5z" />
    <path
      fill="#FFF"
      d="M75.5 131.75l-3.235-12.926L63 128.4l3.661-12.812-12.812 3.661 9.577-9.265L50.5 106.75l12.926-3.235-9.577-9.265 12.812 3.661L63 85.1l9.265 9.576L75.5 81.75l3.235 12.926L88 85.1l-3.661 12.812 12.812-3.661-9.577 9.265 12.926 3.234-12.926 3.235 9.577 9.265-12.812-3.661L88 128.4l-9.265-9.576z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 151;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif nr';
-->
