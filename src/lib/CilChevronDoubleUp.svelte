<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil chevron double up';
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
    d="M259.516,173.771,368.537,282.792,448,203.329,338.979,94.308l.041-.041L270.872,26.118l-4.328-4.3-7-7.085-.067.067h0L191.326,82.953,179.988,94.374,71.033,203.329,150.5,282.792ZM214,105.622,225.334,94.2l34.115-34.115.041.041.067-.067,34.208,34.208-.041.041L402.745,203.329l-34.208,34.208L259.516,128.516,150.5,237.537l-34.207-34.208Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M338.953,315.408l-68.081-68.081-11.289-11.206-.108-.108-68.149,68.148-11.272,11.356L71.033,424.538,150.5,504,259.516,394.979,368.537,504,448,424.538,338.912,315.45Zm63.792,109.13-34.208,34.207L259.516,349.724,150.5,458.745l-34.207-34.207L214,326.831l11.256-11.34,34.265-34.265,34.316,34.316-.041.041Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil chevron double up';
-->
