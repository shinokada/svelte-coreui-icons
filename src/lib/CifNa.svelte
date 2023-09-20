<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif na';
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
    <path id="a" d="M.5.5h300v200H.5z" />
    <path id="c" d="M.5.5h300v200H.5z" />
  </defs>
  <g fill="none" fill-rule="evenodd">
    <path fill="#003580" fill-rule="nonzero" d="M300.5.5H.5v200z" />
    <path fill="#009543" fill-rule="nonzero" d="M.5 200.5h300V.5z" />
    <mask id="b" fill="#fff">
      <use xlink:href="#a" />
    </mask>
    <path
      fill="#000"
      fill-rule="nonzero"
      stroke="#FFF"
      stroke-width={width}
      d="M.5 200.5l300-200"
      mask="url(#b)"
    />
    <mask id="d" fill="#fff">
      <use xlink:href="#c" />
    </mask>
    <path
      fill="#000"
      fill-rule="nonzero"
      stroke="#D21034"
      stroke-width={width}
      d="M.5 200.5l300-200"
      mask="url(#d)"
    />
    <path
      fill="#FFCE00"
      fill-rule="nonzero"
      d="M60.5 22.166l5.176 14.015 11.49-9.549-2.525 14.726 14.726-2.525-9.549 11.49 14.015 5.176-14.015 5.176 9.549 11.49-14.726-2.524 2.525 14.725-11.49-9.549L60.5 88.832l-5.176-14.015-11.49 9.549 2.524-14.725-14.725 2.524 9.549-11.49-14.015-5.176 14.015-5.176-9.549-11.49 14.725 2.525-2.524-14.726 11.49 9.549z"
    />
    <circle
      cx="60.5"
      cy="55.5"
      r="18.333"
      fill="#FFCE00"
      fill-rule="nonzero"
      stroke="#003580"
      stroke-width={width}
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
@prop export let ariaLabel = 'cif na';
-->
