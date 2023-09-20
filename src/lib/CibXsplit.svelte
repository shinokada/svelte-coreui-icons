<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib xsplit';
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
  viewBox="0 0 32 32"
>
  <path
    d="M32 26c-0.932-0.136-3.333-0.401-3.599-0.401-0.136 0-3.735 3.068-5.333 4.532l-0.136 0.135c0.136-1.735 0.401-3.468 0.532-5.197-7.865-0.932-15.6-1.871-23.464-2.803v-20.531h0.401c0.796 0.129 30.129 3.463 31.599 3.599zM28.531 22.531v-14.265c-8.395-0.932-16.932-2-25.333-2.932v14.136c8.401 1.061 16.939 2 25.333 3.061z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib xsplit';
-->
