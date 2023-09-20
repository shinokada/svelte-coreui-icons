<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 219;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif il';
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
  viewBox="0 0 301 219"
>
  <g fill="none">
    <path fill="#FFF" d="M.5.409h300v218.182H.5z" />
    <path fill="#0038B8" d="M.5 20.863h300v34.091H.5zM.5 164.045h300v34.091H.5z" />
    <path stroke="#0038B8" stroke-width="6.364" d="M150.5 149.237l34.414-59.606h-68.828z" />
    <path stroke="#0038B8" stroke-width="6.364" d="M150.5 69.762l-34.414 59.607h68.828z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 219;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif il';
-->
