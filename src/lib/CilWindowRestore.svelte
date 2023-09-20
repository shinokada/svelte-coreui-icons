<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil window restore';
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
    d="M352,153H40.247a24.028,24.028,0,0,0-24,24V458a24.028,24.028,0,0,0,24,24H352a24.028,24.028,0,0,0,24-24V177A24.028,24.028,0,0,0,352,153Zm-8,32v45.22H48.247V185ZM48.247,450V262.22H344V450Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M472,32H152a24.028,24.028,0,0,0-24,24v65h32V64H464V339.143H408v32h64a24.028,24.028,0,0,0,24-24V56A24.028,24.028,0,0,0,472,32Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil window restore';
-->
