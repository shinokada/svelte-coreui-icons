<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib hackerearth';
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
    d="M27.979 0.005h-15.301v8.656h0.145c1.12-1.437 2.953-2.125 4.745-1.776l-0.032-0.005c2.62 0.193 5.213 1.781 5.36 6.875v10.073c-0.011 0.208-0.177 0.375-0.38 0.385h-2.819c-0.208 0-0.38-0.172-0.38-0.385v-9.76c0-2.371-0.781-4.151-3.12-4.151h-0.052c-2.009 0-3.599 1.697-3.468 3.703v-0.011 10.219c0 0.213-0.172 0.385-0.38 0.385h-2.797c-0.213 0-0.385-0.172-0.385-0.385v-23.823h-4.948c-1.093 0-1.989 0.869-2.031 1.959v27.979c0.041 1.145 0.973 2.057 2.119 2.063h23.724c1.1-0.032 1.953-0.969 1.885-2.068v0.005-27.979c0.068-1.057-0.776-1.959-1.837-1.959l-0.048 0.005zM24.588 27.979h-17.181v-1.765h17.181z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib hackerearth';
-->
