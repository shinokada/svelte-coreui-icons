<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib lanyrd';
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
    d="M14.416 31.448c-3.312 1.083-3.645 0.916-5.145-3.735l-3.667-11.359c-0.869-2.693-3.541-9.939-3.989-11.328-0.828-2.589-0.828-2.729 4.036-4.313 3.823-1.249 3.975-1.208 5.365 3.093 1.12 3.475 1.833 6.267 2.979 9.813l3.125 9.661 9.984-3.281c1.975-0.651 2.631-0.62 3.183 1.803l0.407 1.833c0.457 2.129-0.615 2.671-1.756 3.041l-14.521 4.76z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib lanyrd';
-->
