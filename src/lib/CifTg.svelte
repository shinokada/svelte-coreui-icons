<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 300;
  export let height = ctx.height || 187;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif tg';
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
  viewBox="0 0 300 187"
>
  <g fill="none">
    <path fill="#006A4E" d="M0 .75h300v185.5H0z" />
    <path fill="#FFCE00" d="M0 37.85h300v37.1H0zM0 112.05h300v37.1H0z" />
    <path fill="#D21034" d="M0 .75h111.248v111.3H0z" />
    <path
      fill="#FFF"
      d="M22.12 45.509L42.827 60.56l-7.91 24.354 20.707-15.052 20.707 15.052-7.909-24.354 20.707-15.051H63.534l-7.91-24.354-7.909 24.354z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let width = ctx.width || 300;
@prop export let height = ctx.height || 187;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif tg';
-->
