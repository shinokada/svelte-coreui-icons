<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib creative commons sa';
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
    d="M15.975 0.5c8.862 0 15.525 6.881 15.525 15.5 0 9.194-7.406 15.5-15.525 15.5-8.375 0-15.475-6.844-15.475-15.5 0-8.306 6.544-15.5 15.475-15.5zM16.025 3.294c-7.387 0-12.731 6.119-12.731 12.706 0 6.863 5.7 12.675 12.731 12.675 6.45 0 12.675-5.069 12.675-12.675 0.006-7.113-5.637-12.706-12.675-12.706zM9.106 13.813c0.813-5.244 5.031-5.981 6.806-5.981 6.237 0 7.969 5.156 7.969 8.387 0 3.975-2.563 8.306-8.056 8.306-2.431 0-6.194-1.25-6.837-6.063h3.906c0.094 1.881 1.225 2.825 3.406 2.825 1.456 0 3.625-1.138 3.625-5.175 0-5.156-3.069-5.038-3.544-5.038-2.069 0-3.232 0.913-3.488 2.738h1.137l-3.075 3.075-3.063-3.075z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib creative commons sa';
-->
