<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib zapier';
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
    d="M20 16.005c0 1.192-0.219 2.328-0.615 3.38-1.047 0.396-2.192 0.615-3.38 0.615h-0.011c-1.192 0-2.328-0.219-3.38-0.615-0.396-1.052-0.615-2.192-0.615-3.38v-0.011c0-1.192 0.219-2.328 0.615-3.38 1.052-0.396 2.188-0.615 3.38-0.615h0.011c1.192 0 2.333 0.219 3.38 0.615 0.396 1.052 0.615 2.188 0.615 3.38zM31.781 13.333h-9.344l6.599-6.604c-0.52-0.729-1.093-1.412-1.724-2.041-0.629-0.636-1.317-1.209-2.041-1.729l-6.604 6.599v-9.339c-0.864-0.136-1.749-0.219-2.661-0.219h-0.016c-0.907 0-1.792 0.083-2.656 0.219v9.344l-6.599-6.599c-0.735 0.509-1.417 1.093-2.047 1.724-0.636 0.629-1.215 1.317-1.729 2.041l6.599 6.604h-9.339c0 0-0.219 1.755-0.219 2.661v0.011c0 0.907 0.083 1.797 0.219 2.661h9.344l-6.599 6.599c1.031 1.464 2.307 2.74 3.765 3.776l6.604-6.599v9.339c0.864 0.14 1.749 0.219 2.656 0.219h0.021c0.907 0 1.792-0.079 2.656-0.219v-9.339l6.599 6.599c0.735-0.5 1.417-1.083 2.041-1.719h0.005c0.631-0.62 1.209-1.301 1.729-2.041l-6.599-6.599h9.339c0.14-0.86 0.219-1.74 0.219-2.641v-0.041c0-0.907-0.079-1.792-0.219-2.651z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib zapier';
-->
