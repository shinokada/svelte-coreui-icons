<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil featured playlist';
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
    d="M464,72H48a32.036,32.036,0,0,0-32,32V408a32.036,32.036,0,0,0,32,32H464a32.036,32.036,0,0,0,32-32V104A32.036,32.036,0,0,0,464,72Zm0,336H48V104H464l.02,304Z"
  />
  <rect width="184" height="32" x="232" y="184" fill="var(--ci-primary-color, {color})" />
  <rect width="240" height="32" x="176" y="256" fill="var(--ci-primary-color, {color})" />
  <rect width="240" height="32" x="176" y="328" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="88.923 144 88.923 272.923 188.095 203.503 88.923 144"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil featured playlist';
-->
