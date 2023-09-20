<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif pa';
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
    <path fill="#005293" d="M.5 100.5h150v100H.5z" />
    <path fill="#D21034" d="M150.5.5h150v100h-150z" />
    <path
      fill="#005293"
      d="M51.724 42.774l14.694 10.677-5.612 17.275L75.5 60.049l14.695 10.677-5.613-17.275 14.694-10.677H81.113L75.5 25.5l-5.613 17.274z"
    />
    <path
      fill="#D21034"
      d="M201.724 142.775l14.694 10.676-5.612 17.274L225.5 160.05l14.694 10.675-5.613-17.274 14.695-10.676h-18.163L225.5 125.5l-5.613 17.275z"
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
@prop export let ariaLabel = 'cif pa';
-->
