<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil sort descending';
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
  <rect width="120" height="32" x="184" y="288" fill="var(--ci-primary-color, {color})" />
  <rect width="184" height="32" x="184" y="216" fill="var(--ci-primary-color, {color})" />
  <rect width="248" height="32" x="184" y="144" fill="var(--ci-primary-color, {color})" />
  <rect width="312" height="32" x="184" y="72" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="95.196 16 95.196 433.568 43.313 381.686 20.687 404.313 111.196 494.823 201.705 404.313 179.078 381.687 127.196 433.568 127.196 16 95.196 16"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil sort descending';
-->
