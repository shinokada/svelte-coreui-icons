<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib sketch';
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
    d="M1.719 10.137l-1.156 1.556h5.656l0.431-8.169zM24.769 2.856l-8.038-0.856 8.481 9.2zM7.012 13.644l-0.7-1.375h-5.694l14.056 16.356zM7.137 11.694h17.75l-8.869-9.631zM25.719 12.262l-8.369 16.363 14.050-16.356h-5.681zM25.962 4.313l-0.587-0.788 0.056 1.081 0.381 7.088h5.644zM7.094 5.844l-0.288 5.35 8.488-9.194-8.037 0.856zM25.075 12.262h-18.125l9.069 17.738z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib sketch';
-->
