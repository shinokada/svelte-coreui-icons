<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil mic';
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
    d="M256,328a96.108,96.108,0,0,0,96-96V112a96,96,0,0,0-192,0V232A96.108,96.108,0,0,0,256,328ZM192,112a64,64,0,0,1,128,0V232a64,64,0,0,1-128,0Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M400,176v56c0,79.4-64.6,144-144,144S112,311.4,112,232V176H80v56c0,91.653,70.424,167.154,160,175.265V496h32V407.265C361.576,399.154,432,323.653,432,232V176Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil mic';
-->
