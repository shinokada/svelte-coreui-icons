<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib creative commons by';
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
    d="M20.181 12.15v6.338h-1.768v7.531h-4.819v-7.525h-1.769v-6.344c0-0.275 0.1-0.512 0.288-0.706 0.194-0.194 0.431-0.294 0.706-0.294h6.369c0.256 0 0.488 0.1 0.694 0.294 0.194 0.2 0.3 0.431 0.3 0.706zM13.837 8.169c0-1.456 0.719-2.188 2.156-2.188s2.156 0.731 2.156 2.188c0 1.438-0.719 2.156-2.156 2.156s-2.156-0.719-2.156-2.156zM15.975 0.5c8.862 0 15.525 6.881 15.525 15.5 0 9.194-7.406 15.5-15.525 15.5-8.375 0-15.475-6.844-15.475-15.5 0-8.306 6.544-15.5 15.475-15.5zM16.025 3.294c-7.387 0-12.731 6.119-12.731 12.706 0 6.863 5.7 12.675 12.731 12.675 6.45 0 12.675-5.069 12.675-12.675 0.006-7.113-5.637-12.706-12.675-12.706z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib creative commons by';
-->
