<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib creative commons remix';
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
    d="M15.975 0.5c8.862 0 15.525 6.881 15.525 15.5 0 9.194-7.406 15.5-15.525 15.5-8.375 0-15.475-6.844-15.475-15.5 0-8.306 6.544-15.5 15.475-15.5zM16.025 3.294c-7.387 0-12.731 6.119-12.731 12.706 0 6.863 5.7 12.675 12.731 12.675 6.45 0 12.675-5.069 12.675-12.675 0.006-7.113-5.637-12.706-12.675-12.706zM26.131 16.275l0.306 0.138v4.375c-0.45 0.225-3.962 1.719-4.206 1.8-0.406-0.112-7.106-2.925-8.581-3.512l-4.012 1.663-3.956-1.719v-3.988l3.706-1.55c-0.044-0.044-0.025 0.313-0.025-4.4l4.206-1.856 9.494 3.931v3.85zM21.731 21.369v-2.737h-0.025v-0.113l-7.113-2.906v2.825l7.113 2.931v-0.025zM22.2 17.769l2.494-1.025-2.3-0.969-2.438 1.025zM25.469 20.15v-2.688l-2.769 1.163v2.712z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib creative commons remix';
-->
