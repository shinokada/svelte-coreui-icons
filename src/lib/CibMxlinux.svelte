<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib mxlinux';
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
    d="M16 17.735l4.369 5.093-1 1.199-2.843-3.36-1.505-1.787zM32 3.213v25.579c0 0.869-0.708 1.577-1.584 1.577h-28.832c-0.876 0-1.584-0.708-1.584-1.583v-25.573c0-0.875 0.708-1.583 1.584-1.583h28.832c0.876 0 1.584 0.708 1.584 1.583zM29.011 26l-2.817-3.391-2.824-3.385-0.781 0.937-4.333-5.052 6.552-7.64-1.567-1.344-6.344 7.401-6.328-7.371-2.595 2.224 6.667 7.771-0.973 1.136-1.651-1.953-9.027 10.667z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib mxlinux';
-->
