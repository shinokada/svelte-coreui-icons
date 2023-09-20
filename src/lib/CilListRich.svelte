<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil list rich';
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
  <path fill="var(--ci-primary-color, {color})" d="M136,24H16V144H136Zm-32,88H48V56h56Z" />
  <path fill="var(--ci-primary-color, {color})" d="M136,200H16V320H136Zm-32,88H48V232h56Z" />
  <path fill="var(--ci-primary-color, {color})" d="M136,376H16V496H136Zm-32,88H48V408h56Z" />
  <rect width="320" height="32" x="176" y="23.998" fill="var(--ci-primary-color, {color})" />
  <rect width="256" height="32" x="176" y="111.998" fill="var(--ci-primary-color, {color})" />
  <rect width="320" height="32" x="176" y="199.998" fill="var(--ci-primary-color, {color})" />
  <rect width="256" height="32" x="176" y="287.998" fill="var(--ci-primary-color, {color})" />
  <rect width="256" height="32" x="176" y="463.998" fill="var(--ci-primary-color, {color})" />
  <rect width="320" height="32" x="176" y="375.998" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil list rich';
-->
