<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 181;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif bi';
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
  viewBox="0 0 301 181"
>
  <defs>
    <path id="a" d="M.5.5h300v180H.5z" />
  </defs>
  <g fill="none" fill-rule="evenodd">
    <path fill="#CE1126" fill-rule="nonzero" d="M.5.5h300l-300 180h300z" />
    <path fill="#1EB53A" fill-rule="nonzero" d="M.5.5v180l300-180v180z" />
    <mask id="b" fill="#fff">
      <use xlink:href="#a" />
    </mask>
    <path
      fill="#000"
      fill-rule="nonzero"
      stroke="#FFF"
      stroke-width="22.5"
      d="M.5.5l300 180m0-180l-300 180"
      mask="url(#b)"
    />
    <circle cx="150.5" cy="90.5" r="51" fill="#FFF" fill-rule="nonzero" />
    <path
      fill="#1EB53A"
      fill-rule="nonzero"
      d="M140.108 58.1l3.464 6-3.464 6h6.928l3.464 6 3.464-6h6.928l-3.464-6 3.464-6h-6.928l-3.464-6-3.464 6z"
    />
    <path
      fill="#CE1126"
      fill-rule="nonzero"
      d="M141.979 59.18l2.84 4.92-2.84 4.92h5.681l2.84 4.92 2.841-4.92h5.681l-2.841-4.92 2.841-4.92h-5.681l-2.841-4.92-2.84 4.92z"
    />
    <path
      fill="#1EB53A"
      fill-rule="nonzero"
      d="M117.233 97.475l3.464 6-3.464 6h6.928l3.464 6 3.464-6h6.928l-3.464-6 3.464-6h-6.928l-3.464-6-3.464 6z"
    />
    <path
      fill="#CE1126"
      fill-rule="nonzero"
      d="M119.104 98.555l2.84 4.92-2.84 4.92h5.681l2.84 4.92 2.841-4.92h5.681l-2.841-4.92 2.841-4.92h-5.681l-2.841-4.92-2.84 4.92z"
    />
    <path
      fill="#1EB53A"
      fill-rule="nonzero"
      d="M163.184 97.731l3.464 6-3.464 6h6.929l3.464 6 3.464-6h6.928l-3.464-6.001 3.464-5.999h-6.928l-3.464-6-3.464 6z"
    />
    <path
      fill="#CE1126"
      fill-rule="nonzero"
      d="M165.055 98.811l2.841 4.92-2.841 4.92h5.681l2.841 4.919 2.84-4.919h5.681l-2.84-4.92 2.84-4.92h-5.681l-2.84-4.92-2.841 4.919z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 181;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif bi';
-->
