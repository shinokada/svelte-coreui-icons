<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib sparkpost';
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
    d="M21.599 12c-1.802 1.198-2.401 3.599-2.198 5.198-3-3 4.599-11.396-4-17.198 4.797 7.198-7.401 13-7.401 23.198 0 4 2.599 7.604 8 8.802 5.401-1.198 8-4.802 8-8.802 0-6-3.599-8-2.401-11.198zM16 27.802c-2.401 0-4.599-2-4.599-4.599 0-2.401 2-4.604 4.599-4.604 2.401 0 4.599 2 4.599 4.604-0.198 2.599-2.198 4.599-4.599 4.599z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib sparkpost';
-->
