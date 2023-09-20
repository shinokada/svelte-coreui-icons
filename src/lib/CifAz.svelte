<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 151;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif az';
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
    <path fill="#0098C3" d="M.5.5h300v150H.5z" />
    <path fill="#E00034" d="M.5 50.5h300v50H.5z" />
    <path fill="#00AE65" d="M.5 100.5h300v50H.5z" />
    <circle cx="145.75" cy="75.5" r="22.5" fill="#FFF" />
    <circle cx="150.5" cy="75.5" r="18.75" fill="#E00034" />
    <path
      fill="#FFF"
      d="M179.595 84.333l-6.449-3.06L170.759 88l-2.396-6.724-6.445 3.069 3.06-6.449-6.727-2.387 6.724-2.396-3.069-6.445 6.449 3.06L170.742 63l2.396 6.724 6.445-3.069-3.06 6.449 6.728 2.387-6.724 2.396z"
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
@prop export let ariaLabel = 'cif az';
-->
