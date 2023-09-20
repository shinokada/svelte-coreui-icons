<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil list numbered';
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
  <rect width="288" height="32" x="184" y="80" fill="var(--ci-primary-color, {color})" />
  <rect width="288" height="32" x="184" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="288" height="32" x="184" y="400" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="120 160 120 40 56 40 56 72 88 72 88 160 120 160"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="56 262.111 56 312 136 312 136 280 91.777 280 136 257.889 136 192 56 192 56 224 104 224 104 238.111 56 262.111"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="56 440 56 472 136 472 136 344 56 344 56 376 104 376 104 392 80 392 80 424 104 424 104 440 56 440"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil list numbered';
-->
