<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib stumbleupon';
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
    d="M31.431 16.625v4.356c0 3.881-3.144 7.025-7.025 7.025-3.863 0-7.025-3.113-7.025-6.956v-4.387l2.144 1 3.194-0.95v4.413c0 0.919 0.75 1.656 1.669 1.656s1.675-0.738 1.675-1.656v-4.5zM17.387 12.988l2.144 1 3.194-0.95v-2.225c0-3.781-3.194-6.813-7.006-6.813-3.8 0-7.006 3.012-7.006 6.762v10.15c0 0.931-0.75 1.669-1.669 1.669s-1.669-0.738-1.669-1.669v-4.288h-5.375v4.356c0 3.875 3.144 7.019 7.025 7.019 3.85 0 7.025-3.094 7.025-6.925v-10.019c0-0.919 0.75-1.669 1.669-1.669s1.669 0.75 1.669 1.669z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib stumbleupon';
-->
