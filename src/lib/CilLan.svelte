<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil lan';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {role}
  {...$$restProps}
  aria-label={ariaLabel}
  fill={color}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 512 512"
>
  <path
    fill="var(--ci-primary-color, {color})"
    d="M496,272V240H272V192h56a24.027,24.027,0,0,0,24-24V40a24.027,24.027,0,0,0-24-24H184a24.027,24.027,0,0,0-24,24V168a24.027,24.027,0,0,0,24,24h56v48H16v32H96v48H41.391a24.028,24.028,0,0,0-24,24V472a24.028,24.028,0,0,0,24,24H184a24.027,24.027,0,0,0,24-24V344a24.027,24.027,0,0,0-24-24H128V272H384v48H328a24.027,24.027,0,0,0-24,24V472a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V344a24.027,24.027,0,0,0-24-24H416V272ZM192,48H320V160H192ZM176,464H49.391V352H176Zm288,0H336V352H464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil lan';
-->
