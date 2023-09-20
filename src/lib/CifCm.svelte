<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif cm';
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
    <path fill="#007A5E" d="M.5.5h100v200H.5z" />
    <path fill="#CE1126" d="M100.5.5h100v200h-100z" />
    <path
      fill="#FCD116"
      d="M200.5.5h100v200h-100zM125.138 92.26l15.675 11.388-5.987 18.426 15.674-11.388 15.674 11.388-5.987-18.426 15.675-11.388H156.4l-5.9-18.427-5.899 18.427z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 201;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif cm';
-->
