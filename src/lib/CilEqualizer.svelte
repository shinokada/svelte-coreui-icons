<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil equalizer';
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
    d="M96,146.025V16H64V146.025a64.009,64.009,0,0,0,0,123.95V496H96V269.975a64.009,64.009,0,0,0,0-123.95ZM80,240a32,32,0,1,1,32-32A32.036,32.036,0,0,1,80,240Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M272,290.025V16H240V290.025a64.009,64.009,0,0,0,0,123.95V496h32V413.975a64.009,64.009,0,0,0,0-123.95ZM256,384a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,384Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M448,82.025V16H416V82.025a64.009,64.009,0,0,0,0,123.95V496h32V205.975a64.009,64.009,0,0,0,0-123.95ZM432,176a32,32,0,1,1,32-32A32.036,32.036,0,0,1,432,176Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil equalizer';
-->
