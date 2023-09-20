<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil wallpaper';
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
  <rect width="40" height="40" x="344" y="112" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="72 72 224 72 224 40 40 40 40 224 72 224 72 72"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="288 40 288 72 440 72 440 224 472 224 472 40 288 40"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="72 288 40 288 40 472 224 472 224 440 72 440 72 288"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="280.5 308.873 189.5 217.873 104 303.373 104 348.627 189.5 263.128 334.372 408 379.627 408 303.127 331.5 375.231 259.396 440 324.165 440 440 288 440 288 472 472 472 472 312 375.231 214.143 280.5 308.873"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil wallpaper';
-->
