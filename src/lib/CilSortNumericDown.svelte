<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil sort numeric down';
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
    points="151.196 16 151.196 433.568 99.313 381.687 76.687 404.313 167.196 494.823 257.706 404.313 235.079 381.686 183.196 433.568 183.196 16 151.196 16"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="432 200 392 200 392 56 360 56 360 88 328 88 328 120 360 120 360 200 320 200 320 232 432 232 432 200"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M355.2,432H336v32h19.2A76.887,76.887,0,0,0,432,387.2V335.6A55.663,55.663,0,0,0,376.4,280H372a55.663,55.663,0,0,0-55.6,55.6V340A55.663,55.663,0,0,0,372,395.6h4.4a55.262,55.262,0,0,0,23.474-5.215A44.849,44.849,0,0,1,355.2,432Zm21.2-68.4H372A23.627,23.627,0,0,1,348.4,340v-4.4A23.627,23.627,0,0,1,372,312h4.4A23.627,23.627,0,0,1,400,335.6V340A23.627,23.627,0,0,1,376.4,363.6Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil sort numeric down';
-->
