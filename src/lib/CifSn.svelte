<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif sn';
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
    <path fill="#00853F" d="M.5.5h100v200H.5z" />
    <path fill="#FDEF42" d="M100.5.5h100v200h-100z" />
    <path fill="#E31B23" d="M200.5.5h100v200h-100z" />
    <path
      fill="#00853F"
      d="M118.798 90.199l19.593 14.235-7.484 23.033 19.593-14.235 19.593 14.235-7.484-23.033 19.593-14.235h-24.218L150.5 67.166l-7.484 23.033z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 201;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif sn';
-->
