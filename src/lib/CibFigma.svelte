<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib figma';
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
    d="M16 16c0-7.109 10.667-7.109 10.667 0s-10.667 7.109-10.667 0zM5.333 26.667c0-2.948 2.385-5.333 5.333-5.333h5.333v5.333c0 7.109-10.667 7.109-10.667 0zM16 0v10.667h5.333c7.109 0 7.109-10.667 0-10.667zM5.333 5.333c0 2.948 2.385 5.333 5.333 5.333h5.333v-10.667h-5.333c-2.948 0-5.333 2.385-5.333 5.333zM5.333 16c0 2.948 2.385 5.333 5.333 5.333h5.333v-10.667h-5.333c-2.948 0-5.333 2.385-5.333 5.333z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib figma';
-->
