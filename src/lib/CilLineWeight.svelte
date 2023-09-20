<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil line weight';
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
  <rect width="480" height="32" x="16" y="464" fill="var(--ci-primary-color, {color})" />
  <path fill="var(--ci-primary-color, {color})" d="M16,432H496V352H16Zm32-48H464v16H48Z" />
  <path fill="var(--ci-primary-color, {color})" d="M16,320H496V208H16Zm32-80H464v48H48Z" />
  <path fill="var(--ci-primary-color, {color})" d="M16,176H496V16H16ZM48,48H464v96H48Z" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil line weight';
-->
