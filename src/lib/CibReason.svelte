<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib reason';
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
    d="M0 0v32h32v-32zM15.359 29.188l-1.771-3.385h-2.391v3.385h-3.198v-12.266h5.505c3.255 0 5.109 1.583 5.109 4.318 0 1.854-0.776 3.198-2.188 3.948l2.557 4zM30.505 29.188h-9.839v-12.266h9.651v2.557h-6.453v2.292h5.844v2.536l-5.844 0.010v2.307h6.656v2.563zM15.573 21.333c0 1.24-0.745 1.906-2.042 1.906h-2.333v-3.76h2.333c1.297 0 2.042 0.656 2.042 1.87z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib reason';
-->
