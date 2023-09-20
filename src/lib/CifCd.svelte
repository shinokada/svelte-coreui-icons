<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 225;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif cd';
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
  viewBox="0 0 301 225"
>
  <g fill="none">
    <path fill="#007FFF" d="M.5 0h300v225H.5z" />
    <path
      fill="#F7D618"
      d="M14 45h31.5l9.75-31.5L65 45h31.5L71 64.5 80.75 96l-25.5-19.5L29.75 96l9.75-31.5L14 45zM281.75 0L.5 168.75V225h18.75L300.5 56.25V0h-18.75z"
    />
    <path fill="#CE1021" d="M300.5 0L.5 180v45l300-180V0" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 225;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif cd';
-->
