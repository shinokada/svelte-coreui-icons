<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib odnoklassniki';
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
    d="M19.339 23.255c1.703-0.391 3.323-1.061 4.801-1.989 1.111-0.744 1.412-2.244 0.667-3.359-0.713-1.068-2.14-1.391-3.244-0.735-3.401 2.125-7.724 2.125-11.125 0-1.125-0.713-2.62-0.375-3.333 0.749 0 0.005 0 0.005 0 0.005-0.713 1.131-0.375 2.625 0.756 3.333l0.004 0.005c1.475 0.928 3.095 1.599 4.792 1.985l-4.62 4.619c-0.943 0.928-0.957 2.437-0.036 3.381l0.041 0.041c0.459 0.473 1.079 0.708 1.699 0.708s1.239-0.235 1.697-0.708l4.563-4.537 4.536 4.543c0.964 0.921 2.495 0.9 3.423-0.063 0.905-0.937 0.905-2.423 0-3.36zM16 16.516c4.563-0.005 8.255-3.699 8.26-8.256 0-4.552-3.708-8.26-8.26-8.26s-8.26 3.708-8.26 8.26c0.005 4.563 3.703 8.256 8.26 8.261zM16 4.844c1.885 0 3.416 1.531 3.416 3.416 0 1.891-1.531 3.417-3.416 3.423-1.885-0.005-3.416-1.532-3.421-3.423 0.005-1.885 1.536-3.416 3.421-3.421z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib odnoklassniki';
-->
