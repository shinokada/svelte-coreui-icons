<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil align left';
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
  <rect width="480" height="32" x="16" y="64" fill="var(--ci-primary-color, {color})" />
  <rect width="328" height="32" x="16" y="152" fill="var(--ci-primary-color, {color})" />
  <rect width="480" height="32" x="16" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="328" height="32" x="16" y="328" fill="var(--ci-primary-color, {color})" />
  <rect width="480" height="32" x="16" y="416" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil align left';
-->
