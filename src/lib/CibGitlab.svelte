<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib gitlab';
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
    d="M31.937 18.115l-1.787-5.511-3.552-10.921c-0.183-0.563-0.973-0.563-1.156 0l-3.552 10.916h-11.781l-3.552-10.916c-0.183-0.563-0.979-0.563-1.156 0l-3.552 10.916-1.792 5.516c-0.161 0.5 0.021 1.052 0.443 1.364l15.5 11.261 15.5-11.261c0.421-0.312 0.604-0.859 0.437-1.364z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib gitlab';
-->
