<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 201;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif kn';
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
    <path fill="#009E49" fill-rule="nonzero" d="M300.5.5H.5v200" />
    <path fill="#CE1126" fill-rule="nonzero" d="M.5 200.5h300V.5" />
    <mask id="b" fill="#fff">
      <use xlink:href="#a" />
    </mask>
    <path
      fill="#000"
      fill-rule="nonzero"
      stroke="#FCD116"
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
      stroke="#000"
      stroke-width={width}
      d="M.5 200.5l300-200"
      mask="url(#d)"
    />
    <path
      fill="#FFF"
      fill-rule="nonzero"
      d="M180.544 70.072l20.326.82 5.501 19.585 7.062-19.078 20.326.82-15.962-12.611 7.061-19.079-16.927 11.284-15.963-12.61 5.502 19.585zM66.544 146.072l20.326.82 5.501 19.585 7.062-19.078 20.326.82-15.962-12.611 7.061-19.079-16.927 11.284-15.963-12.61 5.502 19.585z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 201;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif kn';
-->
