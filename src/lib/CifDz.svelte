<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 300;
  export let height = ctx.height || 200;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif dz';
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
  viewBox="0 0 300 200"
>
  <g fill="none">
    <path fill="#FFF" d="M0 0h300v200H0z" />
    <path fill="#006233" d="M0 0h150v200H0z" />
    <circle cx="150" cy="100" r="50" fill="#D21034" />
    <g fill="#D21034">
      <path d="M177.951 123.776v-25h-15z" />
      <path d="M177.951 123.776l-14.694-20.225 12.135-8.817z" />
      <path d="M195.225 100l-23.776 7.726-4.635-14.266z" />
      <path d="M195.225 100l-23.776-7.725-4.635 14.266z" />
      <path d="M177.951 76.223v25h-15z" />
      <path d="M150 114.694l23.776-7.725-4.635-14.266z" />
      <path d="M150 114.694l14.694-20.225 12.135 8.817z" />
      <path d="M150 85.305l14.694 20.226 12.135-8.817z" />
      <path d="M150 85.305l23.776 7.726-4.635 14.266z" />
      <path d="M177.951 76.223l-14.694 20.226 12.135 8.817z" />
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
@prop export let ariaLabel = 'cif dz';
-->
