<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil compress';
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
    points="144 144 16 144 16 176 176 176 176 16 144 16 144 144"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="368 144 368 16 336 16 336 176 496 176 496 144 368 144"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="336 496 368 496 368 368 496 368 496 336 336 336 336 496"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="16 368 144 368 144 496 176 496 176 336 16 336 16 368"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil compress';
-->
