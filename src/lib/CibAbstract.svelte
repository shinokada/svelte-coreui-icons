<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib abstract';
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
    d="M16 0c12.803 0 16 3.197 16 16s-3.197 16-16 16c-12.803 0-16-3.197-16-16s3.197-16 16-16zM13.375 24.749c3.365 0.005 6.141-2.76 6.147-6.124 0-3.36-2.767-6.125-6.125-6.125-3.365 0-6.131 2.765-6.131 6.125 0 3.353 2.756 6.12 6.109 6.124zM24.5 24.5v-17h-17v2.995h13.995v14.005zM13.375 15.505c1.724 0 3.125 1.396 3.12 3.125 0 1.724-1.396 3.119-3.125 3.119-4.161 0-4.161-6.249 0.005-6.244z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib abstract';
-->
