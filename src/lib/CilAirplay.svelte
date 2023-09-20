<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil airplay';
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
    d="M464,47H48A32.036,32.036,0,0,0,16,79V376a32.036,32.036,0,0,0,32,32h76.448l24.89-32H48V79H464l.02,297H362.662l24.89,32H464a32.036,32.036,0,0,0,32-32V79A32.036,32.036,0,0,0,464,47Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M98.834,496H413.166L256,293.939Zm65.431-32L256,346.061,347.735,464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil airplay';
-->
