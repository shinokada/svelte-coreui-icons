<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib pinterest p';
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
    d="M16.75 0.406c-6.413 0-12.75 4.275-12.75 11.194 0 4.4 2.475 6.9 3.975 6.9 0.619 0 0.975-1.725 0.975-2.212 0-0.581-1.481-1.819-1.481-4.238 0-5.025 3.825-8.588 8.775-8.588 4.256 0 7.406 2.419 7.406 6.863 0 3.319-1.331 9.544-5.644 9.544-1.556 0-2.888-1.125-2.888-2.737 0-2.363 1.65-4.65 1.65-7.088 0-4.137-5.869-3.387-5.869 1.613 0 1.050 0.131 2.212 0.6 3.169-0.863 3.713-2.625 9.244-2.625 13.069 0 1.181 0.169 2.344 0.281 3.525 0.212 0.238 0.106 0.213 0.431 0.094 3.15-4.313 3.038-5.156 4.463-10.8 0.769 1.463 2.756 2.25 4.331 2.25 6.637 0 9.619-6.469 9.619-12.3 0-6.206-5.363-10.256-11.25-10.256z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib pinterest p';
-->
