<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil line style';
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
  <path fill="var(--ci-primary-color, {color})" d="M16,120H496V16H16ZM48,48H464V88H48Z" />
  <path fill="var(--ci-primary-color, {color})" d="M240,144H16v96H240Zm-32,64H48V176H208Z" />
  <path fill="var(--ci-primary-color, {color})" d="M272,240H496V144H272Zm32-64H464v32H304Z" />
  <path fill="var(--ci-primary-color, {color})" d="M152,272H16v88H152Zm-32,56H48V304h72Z" />
  <path fill="var(--ci-primary-color, {color})" d="M192,360H320V272H192Zm32-56h64v24H224Z" />
  <path fill="var(--ci-primary-color, {color})" d="M360,360H496V272H360Zm32-56h72v24H392Z" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M121.442,443.278A52.721,52.721,0,1,0,68.722,496,52.78,52.78,0,0,0,121.442,443.278Zm-73.442,0A20.721,20.721,0,1,1,68.722,464,20.745,20.745,0,0,1,48,443.278Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M140.853,443.278a52.721,52.721,0,1,0,52.721-52.72A52.78,52.78,0,0,0,140.853,443.278Zm73.442,0a20.721,20.721,0,1,1-20.721-20.72A20.745,20.745,0,0,1,214.3,443.278Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M265.705,443.278a52.721,52.721,0,1,0,52.721-52.72A52.78,52.78,0,0,0,265.705,443.278Zm73.442,0a20.721,20.721,0,1,1-20.721-20.72A20.745,20.745,0,0,1,339.147,443.278Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M443.278,390.558A52.721,52.721,0,1,0,496,443.278,52.78,52.78,0,0,0,443.278,390.558Zm0,73.442A20.721,20.721,0,1,1,464,443.278,20.745,20.745,0,0,1,443.278,464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil line style';
-->
