<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib amd';
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
    d="M24.432 12.182l2.078 2.078h3.406v3.411l2.083 2.078v-7.568zM2.667 12.693l-2.667 6.615h1.745l0.495-1.313h2.958l0.547 1.313h1.781l-2.948-6.615zM8.281 12.693v6.609h1.646v-4.125l1.786 2.083h0.25l1.786-2.073v4.12h1.651v-6.615h-1.443l-2.12 2.458-2.125-2.458zM16.656 12.693v6.615h2.745c2.635 0 3.839-1.396 3.839-3.297 0-1.813-1.25-3.318-3.661-3.318zM18.307 13.906h1.052c1.563 0 2.177 0.948 2.177 2.094 0 0.969-0.5 2.094-2.156 2.094h-1.073zM3.656 14.271l1.057 2.578h-2.036zM26.51 14.682l-2.141 2.135v3h2.995l2.141-2.141h-2.995z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib amd';
-->
