<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil media skip backward';
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
    d="M455.979,424.271A24.053,24.053,0,0,0,480,400.251V112.015a24,24,0,0,0-38.285-19.286L264,224.369V112.015a24,24,0,0,0-38.285-19.286L31.155,236.847h0a24,24,0,0,0,0,38.57l194.56,144.119A24,24,0,0,0,264,400.251V287.9L441.715,419.537A23.922,23.922,0,0,0,455.979,424.271ZM232,384.37,58.88,256.132,232,127.9ZM448,127.9V384.37L274.88,256.132Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil media skip backward';
-->
