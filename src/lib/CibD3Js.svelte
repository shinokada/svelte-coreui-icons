<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib d3 js';
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
    d="M17.749 16c0-8.375-6.791-15.167-15.165-15.167h-2.584v6.667h2.584c4.697 0 8.499 3.807 8.499 8.5s-3.801 8.5-8.499 8.5h-2.584v6.667h2.584c8.375 0 15.165-6.792 15.165-15.167zM32 10.083c0-5.109-4.14-9.249-9.251-9.249h-10.667c2.625 1.645 4.777 3.943 6.245 6.667h4.421c1.428 0 2.584 1.156 2.584 2.583 0 1.428-1.156 2.584-2.584 2.584h-2.583c0.417 2.203 0.417 4.464 0 6.667h2.583c1.423 0 2.584 1.156 2.584 2.584 0 1.432-1.156 2.588-2.584 2.588h-4.421c-1.468 2.724-3.62 5.021-6.245 6.667h10.667c2.163 0 4.256-0.76 5.917-2.141 3.921-3.271 4.464-9.099 1.193-13.025 1.385-1.667 2.14-3.76 2.14-5.923z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib d3 js';
-->
