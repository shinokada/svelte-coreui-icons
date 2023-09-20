<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil spreadsheet';
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
  <path fill="var(--ci-primary-color, {color})" d="M16,64V456H496V64ZM464,424H48V96H464Z" />
  <rect width="88" height="32" x="88" y="136" fill="var(--ci-primary-color, {color})" />
  <rect width="88" height="32" x="88" y="208" fill="var(--ci-primary-color, {color})" />
  <rect width="88" height="32" x="88" y="280" fill="var(--ci-primary-color, {color})" />
  <rect width="88" height="32" x="88" y="352" fill="var(--ci-primary-color, {color})" />
  <rect width="136" height="32" x="288" y="136" fill="var(--ci-primary-color, {color})" />
  <rect width="136" height="32" x="288" y="208" fill="var(--ci-primary-color, {color})" />
  <rect width="136" height="32" x="288" y="280" fill="var(--ci-primary-color, {color})" />
  <rect width="136" height="32" x="288" y="352" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="216" y="136" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="216" y="208" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="216" y="280" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="216" y="352" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil spreadsheet';
-->
