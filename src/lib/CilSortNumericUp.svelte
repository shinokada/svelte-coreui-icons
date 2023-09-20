<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil sort numeric up';
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
    points="102.627 130.313 154.509 78.432 154.509 496 186.509 496 186.509 78.432 238.392 130.314 261.019 107.687 170.509 17.177 80 107.687 102.627 130.313"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="435.313 200 395.313 200 395.313 56 363.313 56 363.313 88 331.313 88 331.313 120 363.313 120 363.313 200 323.313 200 323.313 232 435.313 232 435.313 200"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M358.514,432h-19.2v32h19.2a76.886,76.886,0,0,0,76.8-76.8V335.6a55.662,55.662,0,0,0-55.6-55.6h-4.4a55.663,55.663,0,0,0-55.6,55.6V340a55.663,55.663,0,0,0,55.6,55.6h4.4a55.263,55.263,0,0,0,23.475-5.215A44.85,44.85,0,0,1,358.514,432Zm21.2-68.4h-4.4a23.627,23.627,0,0,1-23.6-23.6v-4.4a23.627,23.627,0,0,1,23.6-23.6h4.4a23.626,23.626,0,0,1,23.6,23.6V340A23.626,23.626,0,0,1,379.713,363.6Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil sort numeric up';
-->
