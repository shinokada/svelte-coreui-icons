<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib picarto tv';
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
    d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM9.437 5.579h3.708c0.313 0 0.563 0.276 0.563 0.624v19.595c0 0.348-0.249 0.624-0.563 0.624h-3.703c-0.312 0-0.563-0.276-0.563-0.624v-19.595c0-0.348 0.251-0.624 0.563-0.624zM15.656 5.579c0.156 0 0.308 0.041 0.437 0.119 0.475 0.276 9.933 5.891 10.745 6.376 0.525 0.307 0.525 1.072 0 1.385-0.584 0.348-10.079 5.989-10.765 6.385-0.527 0.307-1.183-0.079-1.167-0.688v-2.411c0-2.287 3.948-2.939 4.531-3.287 0.527-0.313 0.527-1.079 0-1.391-0.807-0.48-4.531-0.995-4.531-3.265v-2.417c0-0.443 0.333-0.807 0.749-0.812z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib picarto tv';
-->
