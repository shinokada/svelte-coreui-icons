<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil action undo';
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
    d="M495.473,197.262c0-73.061-43.651-136.118-106.242-164.462q-2-.9-4.021-1.762-4.046-1.715-8.19-3.235-2.071-.761-4.167-1.47-4.19-1.422-8.468-2.64a180.951,180.951,0,0,0-98.675,0q-4.278,1.218-8.469,2.64-2.094.71-4.166,1.47-4.143,1.519-8.19,3.235-2.023.857-4.021,1.762c-62.592,28.344-106.242,91.4-106.242,164.462h0V434.745L38.627,338.75,16,361.377,150.623,496,285.246,361.377,262.619,338.75l-96,96V197.263c0-72.891,52.814-133.678,122.186-146.1a149.419,149.419,0,0,1,52.479,0c69.371,12.426,122.186,73.213,122.186,146.1h32Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil action undo';
-->
