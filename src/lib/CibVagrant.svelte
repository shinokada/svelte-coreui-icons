<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib vagrant';
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
    d="M7.563 9.031v-2.474l4.219-2.432-7.036-4.12-4.214 2.464v3.016l9.495 23.063 5.974 3.448v-8.661l2.807-1.635-0.031-0.016 5.661-12.651v-2.474l7.031-4.089-4.219-2.464-7.031 4.12v2.813l-4.219 9.844v3.286l-2.813 1.63zM11.781 4.151l-0.031-0.016-4.188 2.422v2.474l5.625 12.667 2.813-1.385v-3.531l-4.219-9.844zM24.438 6.557v2.474l-5.625 12.135-2.813 1.943v8.885l6.026-3.479 9.443-23.115v-2.932z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib vagrant';
-->
