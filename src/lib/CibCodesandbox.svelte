<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib codesandbox';
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
    d="M2.667 8l13.938-8 13.943 8 0.12 15.932-14.063 8.068-13.938-8zM5.453 11.307v6.344l4.458 2.479v4.688l5.297 3.063v-11.031zM27.771 11.307l-9.755 5.542v11.031l5.292-3.063v-4.682l4.464-2.484zM6.844 8.802l9.74 5.526 9.76-5.573-5.161-2.932-4.547 2.594-4.573-2.625z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib codesandbox';
-->
