<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 151;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif st';
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
    <path fill="#12AD2B" d="M.5.5h300v150H.5z" />
    <path fill="#FFCE00" d="M.5 43.357h300v64.286H.5z" />
    <path fill="#D21034" d="M.5.5v150l75-75" />
    <path
      fill="#000"
      d="M130.12 68.878l12.596 9.151-4.811 14.807 12.595-9.151 12.596 9.151-4.811-14.807 12.595-9.151h-15.569L150.5 54.071l-4.811 14.807zM205.12 68.878l12.596 9.151-4.811 14.807 12.595-9.151 12.596 9.151-4.811-14.807 12.595-9.151h-15.569L225.5 54.071l-4.811 14.807z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 151;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif st';
-->
