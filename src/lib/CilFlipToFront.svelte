<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil flip to front';
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
    d="M464,16H144a32.036,32.036,0,0,0-32,32V368a32.036,32.036,0,0,0,32,32H464a32.036,32.036,0,0,0,32-32V48A32.036,32.036,0,0,0,464,16Zm0,352H144V48H464l.021,320Z"
  />
  <rect width="30.77" height="32" x="77.846" y="464" fill="var(--ci-primary-color, {color})" />
  <rect width="30.77" height="32" x="384" y="464" fill="var(--ci-primary-color, {color})" />
  <rect width="30.77" height="32" x="200.308" y="464" fill="var(--ci-primary-color, {color})" />
  <rect width="30.769" height="32" x="139.077" y="464" fill="var(--ci-primary-color, {color})" />
  <rect width="30.769" height="32" x="261.539" y="464" fill="var(--ci-primary-color, {color})" />
  <rect width="30.77" height="32" x="322.769" y="464" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="16" y="464" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="30.154" x="16" y="224.308" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="30.154" x="16" y="284.461" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="30.154" x="16" y="404.769" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="30.154" x="16" y="344.615" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="30.154" x="16" y="164.154" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="30.154" x="16" y="104" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil flip to front';
-->
