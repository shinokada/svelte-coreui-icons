<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil closed captioning';
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
    d="M472,64H40A24.028,24.028,0,0,0,16,88V424a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V88A24.028,24.028,0,0,0,472,64Zm-8,352H48V96H464Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M184,344a87.108,87.108,0,0,0,54.484-18.891L218.659,299.99A55.41,55.41,0,0,1,184,312a56,56,0,0,1,0-112,55.41,55.41,0,0,1,34.659,12.01l19.825-25.119A87.108,87.108,0,0,0,184,168a88,88,0,0,0,0,176Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M347.429,344a87.108,87.108,0,0,0,54.484-18.891L382.088,299.99A55.414,55.414,0,0,1,347.429,312a56,56,0,0,1,0-112,55.414,55.414,0,0,1,34.659,12.01l19.825-25.119A87.108,87.108,0,0,0,347.429,168a88,88,0,0,0,0,176Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil closed captioning';
-->
