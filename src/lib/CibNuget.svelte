<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib nuget';
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
    d="M23.563 28.844c-7.104 0-7.104-10.651 0-10.651 7.099 0 7.099 10.651 0 10.651zM12.932 16.636c-4.437 0-4.437-6.663 0-6.663 4.443 0 4.443 6.663 0 6.663zM23.797 6.24h-8.891c-4.532 0.005-8.204 3.677-8.209 8.208v8.891c0 4.531 3.677 8.203 8.209 8.203h8.891c2.172 0 4.26-0.864 5.801-2.401 1.537-1.541 2.401-3.624 2.401-5.801v-8.891c0-4.531-3.672-8.208-8.203-8.208zM5.328 3.12c0 3.552-5.328 3.552-5.328 0s5.328-3.552 5.328 0z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib nuget';
-->
