<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil wifi signal off';
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
    d="M503.785,124.254A431.821,431.821,0,0,0,171.308,54.526L192.9,83.09A402.723,402.723,0,0,1,256,78.128a397.867,397.867,0,0,1,216.144,63.419L359.092,303l20.278,26.832L504,151.842V124.4Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M82.542,16V37.9l25.874,34.237a431.346,431.346,0,0,0-100.2,52.117L8,124.4v27.438L237.778,480h36.444l68.5-97.829L404.564,464H427.55V441.342L106.1,16Zm239.9,339.34L256,450.232,39.856,141.547a398.932,398.932,0,0,1,88.759-42.683Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil wifi signal off';
-->
