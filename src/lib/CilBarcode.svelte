<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil barcode';
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
  <path fill="var(--ci-primary-color, {color})" d="M16,464H496V56H16ZM48,88H464V432H48Z" />
  <rect width="32" height="256" x="80" y="128" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="192" x="144" y="128" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="256" x="208" y="128" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="192" x="272" y="128" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="192" x="336" y="128" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="256" x="400" y="128" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="144" y="352" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="272" y="352" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="336" y="352" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil barcode';
-->
