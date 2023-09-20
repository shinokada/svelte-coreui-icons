<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif cf';
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
    <path fill="#003082" d="M.5.5h300v50H.5z" />
    <path fill="#FFF" d="M.5 50.5h300v50H.5z" />
    <path fill="#289728" d="M.5 100.5h300v50H.5z" />
    <path fill="#FFCE00" d="M.5 150.5h300v50H.5z" />
    <path fill="#D21034" d="M125.5.5h50v200h-50z" />
    <path
      fill="#FFCE00"
      d="M50.5 5.148l5.052 15.548h16.347l-13.226 9.608 5.053 15.548L50.5 36.243l-13.225 9.609 5.051-15.548-13.225-9.608h16.348z"
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
@prop export let ariaLabel = 'cif cf';
-->
