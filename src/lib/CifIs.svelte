<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let width = ctx.width || 301;
  export let height = ctx.height || 217;
  export let role = ctx.role || 'img';
  export let ariaLabel = 'cif is';
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
  viewBox="0 0 301 217"
>
  <g fill="none">
    <path fill="#003897" d="M.5.5h300v216H.5" />
    <path fill="#FFF" d="M84.5.5h48v216h-48m-84-132h300v48H.5" />
    <path fill="#D72828" d="M96.5.5h24v216h-24m-96-120h300v24H.5" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let width = ctx.width || 301;
@prop export let height = ctx.height || 217;
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'cif is';
-->
