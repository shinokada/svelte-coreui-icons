<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib azure artifacts';
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
    d="M6.932 0c-0.735 0-1.333 0.573-1.333 1.276v14.057h20.803v-14.057c0-0.703-0.599-1.276-1.333-1.276zM11.197 3.068h3.204c0.443 0 0.796 0.344 0.796 0.765-0.004 0.432-0.364 0.776-0.796 0.765h-3.204c-0.432 0.011-0.785-0.333-0.796-0.765 0-0.421 0.359-0.765 0.796-0.765zM1.416 16c-0.78 0-1.416 0.599-1.416 1.333v13.333c0 0.735 0.636 1.333 1.416 1.333h10.319c-0.74 0-1.333-0.599-1.333-1.333v-10.667h-4c-0.443 0-0.803-0.36-0.803-0.803s0.36-0.796 0.803-0.796h4v-2.401zM30.667 16h-19.599v14.667c0 0.735 0.635 1.333 1.416 1.333h18.183c0.735 0 1.333-0.599 1.333-1.333v-13.333c0-0.735-0.599-1.333-1.333-1.333zM17.599 29.599h-4.796v-1.599h4.796zM20.803 27.197h-8v-1.599h8zM20 20h-3.197c-1.068 0-1.068-1.599 0-1.599h3.197c0.995 0.068 0.995 1.525 0 1.599z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib azure artifacts';
-->
