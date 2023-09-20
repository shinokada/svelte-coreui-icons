<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif ag';
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
    <path fill="#000" d="M.5.5h300v78.261H.5z" />
    <path fill="#0072C6" d="M.5 78.761h300v43.478H.5z" />
    <path fill="#CE1126" d="M.5.5v200h300V.5l-150 200z" />
    <path fill="#FFF" d="M150.5 200.5l-58.695-78.261h117.391z" />
    <path
      fill="#FCD116"
      d="M183.109 72.274l27.644-18.471-32.609 6.486 18.472-27.644-27.645 18.471 6.487-32.608-18.472 27.644-6.486-32.609-6.486 32.609-18.471-27.644 6.486 32.608-27.645-18.471 18.472 27.644-32.609-6.486 27.644 18.471-32.608 6.487h130.435z"
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
@prop export let ariaLabel = 'cif ag';
-->
