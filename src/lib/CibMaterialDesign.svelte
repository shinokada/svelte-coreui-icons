<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib material design';
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
    d="M16 0c-8.828 0-16 7.172-16 16s7.172 16 16 16c8.828 0 16-7.172 16-16s-7.172-16-16-16zM16 1c3.828 0 7.307 1.443 9.958 3.802h-19.917c2.74-2.453 6.281-3.802 9.958-3.802zM6.417 5.802h19.167l-9.583 19.161zM4.802 6.042v19.917c-2.453-2.74-3.802-6.281-3.802-9.958 0-3.828 1.443-7.307 3.802-9.958zM27.198 6.042c2.453 2.74 3.802 6.281 3.802 9.958 0 3.828-1.443 7.307-3.802 9.958zM5.802 6.802l9.698 19.396h-9.698zM26.198 6.802v19.396h-9.698l9.703-19.396zM6.042 27.198h19.917c-2.74 2.453-6.286 3.802-9.958 3.802s-7.219-1.349-9.958-3.802z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib material design';
-->
