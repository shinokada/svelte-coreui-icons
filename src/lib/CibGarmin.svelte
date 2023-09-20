<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib garmin';
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
    d="M29.355 30.229h-26.709c-1.025 0-1.848-0.516-2.26-1.339-0.516-0.812-0.516-1.855 0-2.672l13.355-23.115c0.511-0.817 1.333-1.333 2.26-1.333 1.027 0 1.849 0.516 2.251 1.333l13.364 23.115c0.516 0.823 0.516 1.855 0 2.672-0.417 0.927-1.24 1.339-2.26 1.339z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib garmin';
-->
