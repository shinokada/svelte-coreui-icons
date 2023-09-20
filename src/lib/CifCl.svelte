<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif cl';
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
    <path fill="#D52B1E" d="M300.5 200.5H.5V.5h300z" />
    <path fill="#FFF" d="M100.5 100.5h200V.5H.5z" />
    <path fill="#0039A6" d="M100.5 100.5H.5V.5h100z" />
    <path
      fill="#FFF"
      d="M26.724 42.774l14.694 10.677-5.612 17.274L50.5 60.049l14.695 10.676-5.613-17.274 14.695-10.677H56.113L50.5 25.5l-5.613 17.274z"
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
@prop export let ariaLabel = 'cif cl';
-->
