<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib gg';
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
    d="M11.2 14.4l6.4 6.4-6.4 6.4-11.2-11.2 11.2-11.2 2.8 2.8-1.6 1.6-1.2-1.2-8 8 8 8 3.219-3.219-4.819-4.781zM20.8 4.8l-6.4 6.4 6.4 6.4 1.6-1.6-4.819-4.781 3.219-3.219 8 8-8 8-1.2-1.2-1.6 1.6 2.8 2.8 11.2-11.2z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib gg';
-->
