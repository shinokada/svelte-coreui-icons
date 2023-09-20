<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib postwoman';
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
    d="M3.38 12.38c0 8.234 6.698 19.62 12.62 19.62 5.573 0 12.62-11.385 12.62-19.62 0.005-8.229-5.651-12.38-12.62-12.38s-12.62 4.151-12.62 12.38zM19.281 18.469c1.484-1.484 3.62-2.12 5.677-1.682 0.432 2.057-0.198 4.193-1.688 5.677-1.484 1.484-3.62 2.12-5.672 1.682-0.438-2.057 0.193-4.193 1.682-5.677zM7.042 16.786c2.057-0.438 4.193 0.198 5.677 1.682 1.49 1.484 2.12 3.62 1.682 5.677-2.052 0.438-4.188-0.198-5.672-1.682-1.49-1.484-2.12-3.62-1.688-5.677z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib postwoman';
-->
