<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil fridge';
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
    d="M376,16H136A48.054,48.054,0,0,0,88,64V464a32.036,32.036,0,0,0,32,32H392a32.036,32.036,0,0,0,32-32V64A48.054,48.054,0,0,0,376,16Zm16,448H120V240H392Zm0-256H120V64a16.019,16.019,0,0,1,16-16H376a16.019,16.019,0,0,1,16,16Z"
  />
  <rect width="32" height="96" x="144" y="280" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="64" x="144" y="104" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil fridge';
-->
