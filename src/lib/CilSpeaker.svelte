<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil speaker';
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
    d="M384,16H128A32.036,32.036,0,0,0,96,48V464a32.036,32.036,0,0,0,32,32H384a32.036,32.036,0,0,0,32-32V48A32.036,32.036,0,0,0,384,16Zm0,448H128V48H384l.021,416Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M256,240a96,96,0,1,0,96,96A96.108,96.108,0,0,0,256,240Zm0,160a64,64,0,1,1,64-64A64.072,64.072,0,0,1,256,400Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M256,200a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,200Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,104Z"
  />
  <rect width="32" height="32" x="240" y="320" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil speaker';
-->
