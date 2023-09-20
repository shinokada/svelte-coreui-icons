<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif sy';
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
    <path fill="#000" d="M.5.5h300v200H.5z" />
    <path fill="#FFF" d="M.5.5h300v133.333H.5z" />
    <path fill="#CE1126" d="M.5.5h300v66.667H.5z" />
    <path
      fill="#007A3D"
      d="M189.894 93.804l12.683 9.215-4.812 15.009 12.735-9.252 12.735 9.252-4.864-14.971 12.735-9.253h-15.741L210.5 78.833l-4.864 14.971zM69.894 93.804l12.683 9.215-4.812 15.009 12.735-9.252 12.735 9.252-4.864-14.971 12.735-9.253H95.365L90.5 78.833l-4.864 14.971z"
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
@prop export let ariaLabel = 'cif sy';
-->
