<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib designer news';
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
    d="M15.026 15.974c0-5.109-3.141-8.573-9.12-8.573h-5.906v17.198h6.031c5.807 0 8.995-3.5 8.995-8.62zM10.74 16c0 3.688-1.891 5.286-4.932 5.286h-1.547v-10.573h1.547c2.911 0 4.932 1.672 4.932 5.286zM32 24.599v-17.198h-3.958v9.615l-6.333-9.615h-4.141v17.198h3.964v-10.297l6.776 10.292h3.693z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib designer news';
-->
