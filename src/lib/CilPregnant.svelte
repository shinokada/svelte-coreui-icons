<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil pregnant';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {role}
  {...$$restProps}
  aria-label={ariaLabel}
  fill={color}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 512 512"
>
  <path
    fill="var(--ci-primary-color, {color})"
    d="M224,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,224,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,224,48Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M353.959,251.37c-15.021-16.9-35.063-27.659-62.61-33.506L266.551,160H178.123L152,342.863V400h56v96h96V400h80V352C384,307.028,374.174,274.112,353.959,251.37ZM352,368H272v96H240V368H184V345.137L205.877,192h39.572l23.291,54.344,8.629,1.438c24.5,4.083,41.233,11.979,52.672,24.848C344.817,289.253,352,315.215,352,352Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil pregnant';
-->
