<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib justgiving';
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
    d="M31.62 13.235h-11.183l-6.525 6.557h8.968c-1.183 2.635-3.823 4.083-6.88 4.083-4.14 0-7.521-3.563-7.521-7.697 0-4.151 3.381-7.615 7.521-7.615 1.511 0 2.917 0.391 4.083 1.156l6.053-6.079c-2.751-2.265-6.276-3.64-10.136-3.64-8.839 0-16 7.156-16 16 0 8.828 7.161 16 16 16s16-6.817 16-15.651c0-1.193-0.136-1.803-0.38-3.115z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib justgiving';
-->
