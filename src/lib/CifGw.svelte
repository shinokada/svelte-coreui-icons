<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 151;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif gw';
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
    <path fill="#CE1126" d="M.5.5h100v150H.5z" />
    <path fill="#FCD116" d="M100.5.5h200v75h-200z" />
    <path fill="#009E49" d="M100.5 75.5h200v75h-200z" />
    <path
      fill="#000"
      d="M26.724 67.774l14.694 10.677-5.612 17.274L50.5 85.049l14.695 10.676-5.613-17.274 14.695-10.677H56.113L50.5 50.5l-5.613 17.274z"
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
@prop export let ariaLabel = 'cif gw';
-->
