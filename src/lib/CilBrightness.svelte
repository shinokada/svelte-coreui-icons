<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil brightness';
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
    d="M78.462,253.835l52.522,43.279,6.26,14.276-8.312,68.617,67.742-6.535,14.52,5.668,42.642,54.4,43.28-52.523,14.274-6.259,68.618,8.313-6.536-67.743,5.667-14.519,54.4-42.642-52.522-43.279-6.26-14.276,8.312-68.618-67.741,6.536-14.52-5.667-42.642-54.4-43.279,52.522-14.277,6.26-68.616-8.312,6.536,67.74-5.669,14.522Zm81.026-22.854L171.114,201.2l-3.446-35.709,37.779,4.576,29.281-12.839,22.814-27.687,23.479,29.951L310.8,171.113l35.71-3.445-4.577,37.78,12.839,29.28,27.687,22.814-29.951,23.479L340.887,310.8l3.446,35.712-37.781-4.577-29.278,12.838-22.815,27.688-23.479-29.95L201.2,340.887l-35.711,3.446,4.577-37.781-12.839-29.28-27.687-22.814Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M472,16H40A24.028,24.028,0,0,0,16,40V472a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,472,16Zm-8,448H48V48H464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil brightness';
-->
