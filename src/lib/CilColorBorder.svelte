<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil color border';
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
    d="M143.4,331.909a17.505,17.505,0,0,0,3.285-.311l89.867-21.281,190.2-190.2a62.922,62.922,0,1,0-88.986-88.985l-190.2,190.2-21.134,89.185-.145.674A17.435,17.435,0,0,0,143.4,331.909Zm33.21-94.369L360.4,53.755a30.922,30.922,0,1,1,43.731,43.731L220.342,281.272l-57.314,13.582Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M472,376H40a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V400A24.028,24.028,0,0,0,472,376Zm-8,88H48V408H464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil color border';
-->
