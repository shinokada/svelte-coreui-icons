<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil sim';
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
    d="M384,40H230.627A31.791,31.791,0,0,0,208,49.373L97.373,160A31.791,31.791,0,0,0,88,182.627V448a32.036,32.036,0,0,0,32,32H384a32.036,32.036,0,0,0,32-32V72A32.036,32.036,0,0,0,384,40Zm0,408H120V182.627L230.627,72H384Z"
  />
  <path fill="var(--ci-primary-color, {color})" d="M208,416H352V216H208Zm32-168h80V384H240Z" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil sim';
-->
