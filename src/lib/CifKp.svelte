<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 151;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif kp';
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
    <path fill="#024FA2" d="M.5.5h300v150H.5z" />
    <path fill="#FFF" d="M.5 25.5h300v100H.5z" />
    <path fill="#ED1C27" d="M.5 29.666h300v91.667H.5z" />
    <circle cx="100.5" cy="75.5" r="33.333" fill="#FFF" />
    <path
      fill="#ED1C27"
      d="M69.789 65.521l18.98 13.79-7.249 22.313 18.98-13.79 18.981 13.79-7.25-22.313 18.98-13.79H107.75l-7.25-22.313-7.25 22.313z"
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
@prop export let ariaLabel = 'cif kp';
-->
