<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil speech';
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
  <rect width="32" height="32" x="144" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="240" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="336" y="240" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M464,32H48A32.036,32.036,0,0,0,16,64V352a32.036,32.036,0,0,0,32,32h64V496h30.627l112-112H464a32.036,32.036,0,0,0,32-32V64A32.036,32.036,0,0,0,464,32Zm0,320H241.373L144,449.373V352H48V64H464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil speech';
-->
