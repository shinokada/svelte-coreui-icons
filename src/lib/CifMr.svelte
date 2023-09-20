<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif mr';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
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
  <defs>
    <path id="a" d="M.724.5h299.777v200H.724z" />
  </defs>
  <g fill="none" fill-rule="evenodd">
    <path fill="#006233" fill-rule="nonzero" d="M.5.5h299.777v200H.5z" />
    <ellipse cx="150.389" cy="75.5" fill="#FFC400" fill-rule="nonzero" rx="64.535" ry="64.583" />
    <mask id="b" fill="#fff">
      <use xlink:href="#a" />
    </mask>
    <ellipse
      cx="150.389"
      cy="58.833"
      fill="#006233"
      fill-rule="nonzero"
      mask="url(#b)"
      rx="62.453"
      ry="62.5"
    />
    <path
      fill="#FFC400"
      fill-rule="nonzero"
      d="M126.63 51.108l14.683 10.676-5.608 17.275 14.684-10.676 14.683 10.676-5.609-17.275 14.684-10.676h-18.15l-5.608-17.275-5.609 17.275z"
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
@prop export let ariaLabel = 'cif mr';
-->
