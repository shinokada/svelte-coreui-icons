<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib basecamp';
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
    d="M16 2.667c-8.615 0-15.36 10.959-16 20.213 2.703 4.693 9.219 6.453 16 6.453s13.303-1.76 16-6.453c-0.64-9.255-7.385-20.213-16-20.213zM16.197 27.197c-12.719 0-13.937-5.375-13.937-5.375l0.24-1.301c0 0 3.5-7.563 5.697-7.563 2.204 0 3.12 3.12 4.923 3.12 1.801 0 5.697-6.917 7.099-6.917 1.396 0 3.76 2.599 5.693 5 1.932 2.401 3.837 6.516 3.837 6.516l-0.009 0.041 0.197 1.183c0 0-1.020 5.296-13.74 5.296z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib basecamp';
-->
