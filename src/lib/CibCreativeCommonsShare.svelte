<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib creative commons share';
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
    d="M15.975 0.5c8.862 0 15.525 6.881 15.525 15.5 0 9.194-7.406 15.5-15.525 15.5-8.375 0-15.475-6.844-15.475-15.5 0-8.306 6.544-15.5 15.475-15.5zM16.025 3.294c-7.387 0-12.731 6.119-12.731 12.706 0 6.863 5.7 12.675 12.731 12.675 6.45 0 12.675-5.069 12.675-12.675 0.006-7.113-5.637-12.706-12.675-12.706zM22.337 11.569c0.488 0 0.857 0.381 0.857 0.856v11.406c0 0.481-0.381 0.856-0.857 0.856h-8.444c-0.481 0-0.856-0.375-0.856-0.856v-3.375h-3.375c-0.488 0-0.857-0.375-0.857-0.856v-11.406c0-0.513 0.413-0.794 0.775-0.857h8.525c0.481 0 0.856 0.375 0.856 0.857v3.375zM10.494 18.769h2.544v-6.338c0-0.462 0.362-0.787 0.75-0.856h3.487v-2.519h-6.781zM21.506 13.262h-6.781v9.713h6.781z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib creative commons share';
-->
