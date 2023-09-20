<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil applications';
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
    d="M88,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,128Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M256,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,128Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M424,160a64,64,0,1,0-64-64A64.072,64.072,0,0,0,424,160Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,424,64Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M88,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,288Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M424,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,288Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M88,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,448Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M256,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,448Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M424,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,448Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil applications';
-->
