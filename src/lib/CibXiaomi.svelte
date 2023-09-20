<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib xiaomi';
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
    d="M26.615 26.667c-0.234 0-0.427-0.193-0.427-0.427v-20.479c0-0.234 0.193-0.427 0.427-0.427h4.948c0.24-0.005 0.438 0.188 0.438 0.427v20.479c0 0.24-0.198 0.432-0.438 0.427zM18.318 26.667c0 0-0.396-0.12-0.396-0.427v-12.573c0.052-1.651-1.281-3.016-2.938-3h-9.25c-0.536 0-0.401 0.401-0.401 0.401v15.172c0 0.359-0.401 0.427-0.401 0.427h-4.495c-0.24 0.005-0.438-0.188-0.438-0.427v-20.479c0-0.24 0.198-0.432 0.438-0.427h17.151c3.13 0.021 5.656 2.563 5.667 5.693l0.010 15.214c0 0.234-0.188 0.427-0.427 0.427zM9.12 26.667c-0.219 0-0.401-0.177-0.401-0.401v-12c0-0.219 0.182-0.401 0.401-0.401h5.026c0.219 0.010 0.385 0.188 0.385 0.401v12c0 0.224-0.177 0.401-0.396 0.401z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib xiaomi';
-->
