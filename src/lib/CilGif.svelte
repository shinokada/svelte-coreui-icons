<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil gif';
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
  <path
    fill="var(--ci-primary-color, {color})"
    d="M64,136V360a32.036,32.036,0,0,0,32,32h96V232H128v32h32v96H96V136h96V104H96A32.036,32.036,0,0,0,64,136Z"
  />
  <rect width="32" height="288" x="240" y="104" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="448 136 448 104 328 104 328 392 360 392 360 264 432 264 432 232 360 232 360 136 448 136"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil gif';
-->
