<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib hotjar';
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
    d="M27.931 10.094c-4.669-8.281-18.362-10.094-18.362-10.094s6.319 6.9-1.756 12.356c-5.106 3.444-7.125 7.919-4.938 12.806 1.675 3.744 5.219 5.269 9.038 5.837-1.825-3.444-0.413-7.65-0.256-8.1 3.569 5.4 10.313 0 6.925-5.869 4.438 0.962 5.1 8.663 1.694 13.469 5.031-1.581 8.381-5.556 9.3-9.1 0.969-3.706 0.231-7.994-1.644-11.306z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib hotjar';
-->
