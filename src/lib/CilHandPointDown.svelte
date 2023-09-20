<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil hand point down';
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
    d="M460.579,101.868,409.06,16H264.892L41.573,263.245a24,24,0,0,0,2.007,34.148A90.41,90.41,0,0,0,173.089,286.6L191.582,264H216V444a52,52,0,0,0,104,0V332.162l126.423-35.119A24.071,24.071,0,0,0,464,273.919v-159.7A24.006,24.006,0,0,0,460.579,101.868ZM432,267.838l-144,40V444a20,20,0,0,1-40,0V232H176.418l-28.1,34.34a58.439,58.439,0,0,1-77.181,11.91L279.108,48H390.94L432,116.433Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil hand point down';
-->
