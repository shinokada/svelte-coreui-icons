<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 151;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif jm';
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
  viewBox="0 0 301 151"
>
  <defs>
    <path id="a" d="M.5.5h300v150H.5z" />
  </defs>
  <g fill="none" fill-rule="evenodd">
    <path fill="#009B3A" fill-rule="nonzero" d="M.5.5h300v150H.5z" />
    <mask id="b" fill="#fff">
      <use xlink:href="#a" />
    </mask>
    <path
      fill="#000"
      fill-rule="nonzero"
      stroke="#FED100"
      stroke-width={width}
      d="M300.5.5l-150 75 150 75M.5.5l150 75-150 75"
      mask="url(#b)"
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
@prop export let ariaLabel = 'cif jm';
-->
