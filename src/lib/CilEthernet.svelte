<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil ethernet';
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
  viewBox="0 0 512 512"
>
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="385.128 118.178 359.868 137.822 451.732 255.944 359.813 374.18 385.076 393.82 492.268 255.94 385.128 118.178"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="119.814 118.177 12.621 255.993 119.759 393.819 145.022 374.181 53.156 255.999 145.074 137.823 119.814 118.177"
  />
  <rect width="32" height="32" x="160" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="240" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="320" y="240" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil ethernet';
-->
