<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil list numbered rtl';
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
  <rect width="288" height="32" x="40" y="80" fill="var(--ci-primary-color, {color})" />
  <rect width="288" height="32" x="40" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="288" height="32" x="40" y="400" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="440 160 440 40 376 40 376 72 408 72 408 160 440 160"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="376 262.111 376 312 456 312 456 280 411.777 280 456 257.889 456 192 376 192 376 224 424 224 424 238.111 376 262.111"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="376 440 376 472 456 472 456 344 376 344 376 376 424 376 424 392 400 392 400 424 424 424 424 440 376 440"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil list numbered rtl';
-->
