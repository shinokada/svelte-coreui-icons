<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib digg';
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
    d="M23.683 10.88v10.88h5.12v1.281h-5.12v2.557h8.317v-14.719zM14.079 10.88v10.88h5.119v1.281h-5.119v2.557h8.323v-14.719zM5.12 6.401v4.479h-5.12v10.88h8.317v-15.359zM12.803 10.88h-3.204v10.88h3.204zM28.803 19.197h-1.923v-5.76h1.923zM5.12 19.197h-1.923v-5.76h1.923zM19.197 19.197h-1.916v-5.76h1.916zM12.803 6.401h-3.204v3.197h3.204z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib digg';
-->
