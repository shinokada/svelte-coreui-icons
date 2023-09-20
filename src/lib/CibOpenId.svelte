<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib open id';
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
    d="M18.969 27l-4.25 2c-7.188-0.644-12.719-4.469-12.719-9.113 0-4.469 5.156-8.188 11.981-9.019v2.688c-4.469 0.781-7.75 3.313-7.75 6.331 0 3.188 3.656 5.831 8.481 6.438v-21.25l4.25-2.075v24zM30 18.188l-8.206-1.781 2.3-1.294c-1.219-0.719-2.719-1.25-4.375-1.55v-2.688c2.887 0.344 5.481 1.219 7.519 2.456l2.188-1.238z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib open id';
-->
