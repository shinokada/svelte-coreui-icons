<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib creative commons nc jp';
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
    d="M15.981 0.5c-9.006 0-15.481 7.3-15.481 15.5 0 8.525 6.988 15.5 15.481 15.5 8.137 0 15.519-6.3 15.519-15.5 0-8.675-6.719-15.5-15.519-15.5zM16.019 28.669c-7 0-12.725-5.781-12.725-12.669 0-1.319 0.188-2.575 0.563-3.769l7.938 3.531h-1.744v2.413h3.631l0.357 0.738v1.169h-3.988v2.419h3.988v3.5h3.856v-3.5h4.012v-2.231l5.063 2.256c-0.094 0.138-3.569 6.144-10.95 6.144zM21.494 20.087h-3.6v-1.169l0.181-0.35zM21.9 16.875v-1.113h-2.412l3.938-7.25h-4.113l-2.712 6-1.438-0.637-2.475-5.356h-4.113l1.706 3.188-5.119-2.281c1.737-2.756 5.162-6.131 10.856-6.131 7.050 0 12.688 5.625 12.688 12.713 0 1.313-0.169 2.537-0.494 3.688z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib creative commons nc jp';
-->
