<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil link broken';
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
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="288 496 320 496 320 368 448 368 448 336 288 336 288 496"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="224 176 224 16 192 16 192 144 64 144 64 176 224 176"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M78.708,434.573,77.429,433.3a100.478,100.478,0,0,1,0-142.1l75.2-75.2H107.372L54.8,268.57a132.478,132.478,0,0,0,0,187.35l1.278,1.278a132.628,132.628,0,0,0,187.352,0l4.57-4.57V407.373l-27.2,27.2A100.591,100.591,0,0,1,78.708,434.573Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M457.2,56.08,455.922,54.8c-51.653-51.655-135.7-51.653-187.352,0L264,59.372v45.255l27.2-27.2a100.591,100.591,0,0,1,142.095,0l1.279,1.278a100.478,100.478,0,0,1,0,142.1l-75.2,75.2h45.253L457.2,243.43a132.478,132.478,0,0,0,0-187.35Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil link broken';
-->
