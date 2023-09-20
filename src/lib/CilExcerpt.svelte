<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil excerpt';
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
  <rect width="480" height="32" x="16" y="344" fill="var(--ci-primary-color, {color})" />
  <rect width="480" height="32" x="16" y="152.333" fill="var(--ci-primary-color, {color})" />
  <rect width="328" height="32" x="16" y="248" fill="var(--ci-primary-color, {color})" />
  <rect width="384" height="32" x="16" y="56" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="16" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="240" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="128" y="440" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil excerpt';
-->
