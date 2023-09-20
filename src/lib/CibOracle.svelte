<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib oracle';
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
    d="M21.88 5.88h-11.755c-5.589 0-10.12 4.527-10.125 10.115-0.005 5.589 4.527 10.12 10.115 10.125h11.765c5.589 0 10.12-4.532 10.12-10.12s-4.531-10.12-10.12-10.12zM21.625 22.552h-11.245c-8.563-0.172-8.563-12.932 0-13.104h11.245c8.735 0 8.735 13.104 0 13.104z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib oracle';
-->
