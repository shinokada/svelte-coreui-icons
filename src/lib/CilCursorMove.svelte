<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil cursor move';
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
    points="130.412 323.98 78.529 272.098 240 272.098 240 433.568 188.118 381.687 165.49 404.313 256 494.823 346.51 404.313 323.882 381.687 272 433.568 272 272.098 432.667 272.098 380.784 323.98 403.412 346.607 493.921 256.098 403.412 165.588 380.784 188.215 432.667 240.098 272 240.098 272 79.432 323.882 131.313 346.51 108.687 256 18.177 165.49 108.687 188.118 131.313 240 79.432 240 240.098 78.529 240.098 130.412 188.215 107.784 165.588 17.274 256.098 107.785 346.608 130.412 323.98"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil cursor move';
-->
