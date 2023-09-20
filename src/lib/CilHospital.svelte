<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil hospital';
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
  <rect width="32" height="32" x="160" y="304" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="240" y="304" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="320" y="304" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M440,464V88H368V16H144V88H72V464H16v32H496V464ZM176,48H336V208H176ZM408,464H272V400H240v64H104V120h40V240H368V120h40Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="272 80 240 80 240 112 208 112 208 144 240 144 240 176 272 176 272 144 304 144 304 112 272 112 272 80"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil hospital';
-->
