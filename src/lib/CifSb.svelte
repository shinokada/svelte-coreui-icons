<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 151;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif sb';
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
  viewBox="0 0 301 151"
>
  <defs>
    <path id="a" d="M.5.5h300v150H.5z" />
  </defs>
  <g fill="none" fill-rule="evenodd">
    <path fill="#215B33" fill-rule="nonzero" d="M.5.5h300v150H.5z" />
    <path fill="#0051BA" fill-rule="nonzero" d="M.5 150.5V.5h300" />
    <mask id="b" fill="#fff">
      <use xlink:href="#a" />
    </mask>
    <path stroke="#FCD116" stroke-width={width} d="M300.5.5l-300 150" mask="url(#b)" />
    <path
      fill="#FFF"
      fill-rule="nonzero"
      d="M9.123 15.484l8.816 6.406-3.367 10.365 8.817-6.406 8.816 6.406-3.367-10.365 8.817-6.406H26.756L23.389 5.12l-3.368 10.364zM68.346 15.484l8.817 6.406-3.368 10.365 8.817-6.406 8.816 6.406-3.367-10.365 8.817-6.406H85.98L82.612 5.12l-3.368 10.364zM38.734 40.865l8.817 6.405-3.368 10.365L53 51.229l8.817 6.406-3.368-10.365 8.817-6.405H56.368L53 30.5l-3.367 10.365zM9.123 66.245l8.816 6.406-3.367 10.364 8.817-6.405 8.816 6.405-3.367-10.364 8.817-6.406H26.756L23.389 55.88l-3.368 10.365zM68.346 66.245l8.817 6.406-3.368 10.364 8.817-6.405 8.816 6.405-3.367-10.364 8.817-6.406H85.98L82.612 55.88l-3.368 10.365z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 151;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif sb';
-->
