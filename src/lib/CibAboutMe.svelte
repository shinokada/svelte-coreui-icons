<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib about me';
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
    d="M26.047 12.197c-1.828 0-2.844 1.355-3.057 2.824h6.147c-0.167-1.401-1.157-2.819-3.089-2.819zM23.036 17.027c0.313 1.541 1.589 2.624 3.376 2.624 0.963 0 2.359-0.359 3.176-1.219l1.568 1.803c-1.416 1.479-3.536 1.901-4.984 1.901-3.521 0-6.265-2.543-6.265-6.147 0-3.375 2.525-6.156 6.093-6.156 3.448 0 6 2.64 6 6.136v1.020h-8.964zM14.385 22.131v-7.589c0-1.296-0.579-2.047-1.787-2.047-1.083 0-1.801 0.781-2.287 1.344v8.317h-3.135v-7.599c0-1.303-0.552-2.041-1.756-2.041-1.083 0-1.833 0.781-2.291 1.344v8.317h-3.131v-12.167h3.136v1.531c0.531-0.615 1.733-1.677 3.609-1.677 1.667 0 2.796 0.699 3.301 2.12 0.703-1.015 2-2.12 3.88-2.12 2.271 0 3.589 1.344 3.589 3.948v8.324h-3.136l0.005-0.011z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib about me';
-->
