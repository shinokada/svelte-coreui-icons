<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib squarespace';
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
    d="M30.208 11.625c-2.405-2.401-6.301-2.401-8.755 0l-9.803 9.801c-0.599 0.6-0.599 1.6 0 2.199 0.604 0.599 1.604 0.599 2.204 0l9.801-9.803c1.199-1.197 3.147-1.197 4.349 0 1.203 1.204 1.203 3.151 0 4.355l-9.651 9.651c1.197 1.199 3.151 1.199 4.348 0l7.453-7.453c2.448-2.448 2.448-6.348 0.052-8.749zM26.907 14.875c-0.6-0.599-1.6-0.599-2.199 0l-9.807 9.855c-1.199 1.197-3.147 1.197-4.349 0-0.599-0.604-1.599-0.604-2.197 0-0.605 0.599-0.605 1.599 0 2.197 2.4 2.401 6.296 2.401 8.749 0l9.803-9.801c0.599-0.652 0.599-1.652 0-2.251zM23.656 5.073c-2.401-2.401-6.301-2.401-8.755 0l-9.803 9.801c-0.599 0.599-0.599 1.599 0 2.199 0.604 0.604 1.604 0.604 2.204 0l9.859-9.803c1.199-1.197 3.161-1.197 4.36 0 0.604 0.604 1.604 0.604 2.197 0 0.563-0.645 0.563-1.593-0.036-2.197zM20.355 8.323c-0.6-0.599-1.6-0.599-2.199 0l-9.801 9.855c-1.199 1.197-3.152 1.197-4.355 0-1.197-1.199-1.197-3.151 0-4.355l9.651-9.651c-1.197-1.199-3.145-1.199-4.348 0l-7.5 7.453c-2.401 2.401-2.401 6.301 0 8.749 2.4 2.401 6.296 2.401 8.749 0l9.803-9.801c0.599-0.652 0.599-1.652 0-2.251z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib squarespace';
-->
