<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib gmail';
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
    d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib gmail';
-->
