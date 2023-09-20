<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 300;
  export let height = ctx.height || 200;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif za';
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
  viewBox="0 0 300 200"
>
  <defs>
    <path id="a" d="M0 0h300v200H0z" />
    <path id="c" d="M0 0l150 100L0 200" />
  </defs>
  <g fill="none" fill-rule="evenodd">
    <mask id="b" fill="#fff">
      <use xlink:href="#a" />
    </mask>
    <g mask="url(#b)">
      <path fill="#002395" fill-rule="nonzero" d="M0 0v200h300V0z" />
      <path fill="#DE3831" fill-rule="nonzero" d="M0 0v100h300V0z" />
      <path
        fill="#000"
        fill-rule="nonzero"
        stroke="#FFF"
        stroke-width="66.667"
        d="M0 0l150 100L0 200m146-100h154"
      />
      <mask id="d" fill="#fff">
        <use xlink:href="#c" />
      </mask>
      <path
        fill="#000"
        fill-rule="nonzero"
        stroke="#FFB612"
        stroke-width={width}
        d="M0 0l150 100L0 200"
        mask="url(#d)"
      />
      <path stroke="#007A4D" stroke-width={width} d="M0 0l150 100L0 200m150-100h150" />
    </g>
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 300;
@prop export let height = ctx.height || 200;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif za';
-->
