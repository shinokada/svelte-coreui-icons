<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil chevron double right';
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
    d="M503.933,255.933l.041-.041L435.893,187.81l-6.221-6.175-5.122-5.085L315.516,67.516l-79.462,79.463L345.075,256,236.054,365.021l79.462,79.463L424.537,335.463l.041.041.067-.067h0l68.081-68.082L504,256Zm-188.417,143.3-34.207-34.208L390.33,256,281.309,146.979l34.207-34.208,97.707,97.707,11.355,11.273L458.827,256l-34.249,34.249-.041-.041-.067.067Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M282.792,256l-.067-.067.041-.041L214.684,187.81,203.4,176.6,94.308,67.516,14.845,146.979,123.866,256,14.845,365.021l79.463,79.463L203.4,335.4l.041.041,68.082-68.082ZM203.3,290.316l-.041-.041L94.308,399.229,60.1,365.021,169.121,256,60.1,146.979l34.208-34.208,97.707,97.707,11.279,11.2L237.619,256Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil chevron double right';
-->
