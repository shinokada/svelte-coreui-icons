<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil chevron double down';
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
    d="M252.482,345.034,143.462,236.013,64,315.475,173.087,424.563l-.041.041,68.082,68.082,11.354,11.273.041.041,68.15-68.148,11.206-11.289L440.966,315.475,361.5,236.013Zm45.523,68.149-11.17,11.252-34.353,34.351-.039-.038-34.276-34.277.041-.042L109.254,315.475l34.208-34.207,109.02,109.021L361.5,281.268l34.208,34.207Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M173.046,203.4l68.082,68.082,11.354,11.272.041.042,68.15-68.149,11.206-11.289L440.966,94.267,361.5,14.8,252.482,123.825,143.462,14.8,64,94.267,173.087,203.354ZM109.254,94.267l34.208-34.208L252.482,169.08,361.5,60.059l34.208,34.208-97.707,97.707-11.182,11.264-34.341,34.34-.039-.039-34.276-34.277.041-.041Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil chevron double down';
-->
