<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil wifi signal 2';
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
    d="M503.785,124.254a432.019,432.019,0,0,0-495.57,0L8,124.4v27.438L86.881,264.5h0L237.778,480h36.444l150.9-215.5h0L504,151.842V124.4ZM189.824,355.724l75.96-117.392a240.089,240.089,0,0,1,43.276,5.686l-95.22,146Zm-19.809-28.291L131.75,272.784a238.218,238.218,0,0,1,94.9-32.873Zm63.606,90.838L340.994,253.632a239.338,239.338,0,0,1,39.256,19.152L256,450.232ZM398.639,246.523a272.034,272.034,0,0,0-285.278,0l-73.5-104.976a400.039,400.039,0,0,1,432.288,0Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil wifi signal 2';
-->
