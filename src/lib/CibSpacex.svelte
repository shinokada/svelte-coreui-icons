<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib spacex';
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
  viewBox="0 0 32 32"
>
  <path
    d="M31.937 9.287c-0.011 0-0.016-0.005-0.020-0.005-0.011 0-0.021 0.005-0.032 0.011-20.172 2.031-29.651 10.801-31.885 12.959l0.297 0.468h3.525c9.161-9.213 21.541-12.271 28.089-13.276l0.005 0.005c0.004 0 0.009-0.011 0.015-0.011 0.037-0.005 0.068-0.036 0.068-0.077 0-0.037-0.027-0.063-0.063-0.073zM0.505 14.011l-0.213 0.401 4.328 3.156c0.875-0.511 1.771-0.984 2.683-1.432l-2.901-2.125zM10.125 18.197c-0.719 0.532-1.448 1.095-2.235 1.756l3.803 2.765h3.943l0.167-0.359z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib spacex';
-->
