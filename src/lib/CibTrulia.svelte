<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib trulia';
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
    d="M16 0c-5.079 0.027-8.36 3.437-8.36 8.593 0 4.267 2.781 7.923 4.371 13.469 0.911 3.177 1.401 7.068 1.651 9.937h4.677c0.255-2.869 0.74-6.76 1.651-9.937 1.589-5.547 4.371-9.199 4.371-13.469 0-5.156-3.281-8.567-8.36-8.593zM16.027 13.136c-2.109 0-3.824-1.715-3.824-3.824s1.715-3.823 3.824-3.823c2.113 0 3.828 1.708 3.828 3.823 0 2.109-1.715 3.824-3.828 3.824z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib trulia';
-->
