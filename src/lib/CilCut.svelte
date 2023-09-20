<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil cut';
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
    d="M104,320a88.067,88.067,0,1,0,75.607,43.02L260,282.627,425.373,448H448V425.373L282.627,260,448,94.627V72H425.373L260,237.373,176.477,153.85a88.088,88.088,0,1,0-22.627,22.627L237.373,260l-78.919,78.919A87.57,87.57,0,0,0,104,320Zm0-160a56,56,0,1,1,56-56A56.063,56.063,0,0,1,104,160Zm0,304a56,56,0,1,1,56-56A56.063,56.063,0,0,1,104,464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil cut';
-->
