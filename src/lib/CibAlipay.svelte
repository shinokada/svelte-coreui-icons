<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib alipay';
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
    d="M25.609 2h-19.217c-2.428 0-4.391 1.963-4.391 4.391v19.217c0 2.428 1.963 4.391 4.391 4.391h19.217c2.408 0 4.36-1.942 4.391-4.35-2.873-1.601-6.912-3.771-10.725-5.527-2.004 2.748-5.258 5.063-9.289 5.063-4.412 0-5.858-2.831-6.065-4.773-0.248-2.438 0.93-5.094 6.22-5.094 2.211 0 4.959 0.641 7.946 1.56 1.033-1.881 1.653-3.771 1.653-3.771h-11.137v-1.044h5.755v-1.953h-6.84v-1.188h6.84v-3.151h3.183v3.151h6.84v1.188h-6.841v1.953h5.548c0 0-0.95 2.914-2.397 5.682 3.058 1.044 6.25 2.252 9.289 3.296v-14.651c0.010-2.418-1.953-4.391-4.371-4.391zM4.955 20.184c0.062 1.261 0.641 3.358 4.371 3.358 3.254 0 5.786-2.48 7.367-4.556-2.789-1.167-5.28-1.963-6.84-1.963-4.216 0-4.96 2.066-4.897 3.161z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib alipay';
-->
