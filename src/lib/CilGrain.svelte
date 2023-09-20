<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil grain';
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
    d="M88,16a56,56,0,1,0,56,56A56.063,56.063,0,0,0,88,16Zm0,80a24,24,0,1,1,24-24A24.028,24.028,0,0,1,88,96Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M200,138.667a56,56,0,1,0,56,56A56.063,56.063,0,0,0,200,138.667Zm0,80a24,24,0,1,1,24-24A24.028,24.028,0,0,1,200,218.667Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M88,373.333a56,56,0,1,0-56-56A56.063,56.063,0,0,0,88,373.333Zm0-80a24,24,0,1,1-24,24A24.028,24.028,0,0,1,88,293.333Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M200,496a56,56,0,1,0-56-56A56.063,56.063,0,0,0,200,496Zm0-80a24,24,0,1,1-24,24A24.028,24.028,0,0,1,200,416Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M312,16a56,56,0,1,0,56,56A56.063,56.063,0,0,0,312,16Zm0,80a24,24,0,1,1,24-24A24.028,24.028,0,0,1,312,96Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M424,138.667a56,56,0,1,0,56,56A56.063,56.063,0,0,0,424,138.667Zm0,80a24,24,0,1,1,24-24A24.028,24.028,0,0,1,424,218.667Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M312,373.333a56,56,0,1,0-56-56A56.063,56.063,0,0,0,312,373.333Zm0-80a24,24,0,1,1-24,24A24.028,24.028,0,0,1,312,293.333Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M424,384a56,56,0,1,0,56,56A56.063,56.063,0,0,0,424,384Zm0,80a24,24,0,1,1,24-24A24.028,24.028,0,0,1,424,464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil grain';
-->
