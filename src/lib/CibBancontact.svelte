<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib bancontact';
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
    d="M28.516 13.027h-9.433l-5.723 6.692h-11.281l3.041-3.583h-3.625c-0.823 0-1.495 0.687-1.495 1.531v3.24c0 0.843 0.672 1.531 1.495 1.531h17.245c0.823 0 1.948-0.511 2.5-1.14l2.609-2.964 4.624-5.26zM27.016 14.729l-1 1.14zM30.505 9.563h-17.199c-0.823 0-1.947 0.511-2.5 1.135l-7.317 8.281h9.396l5.823-6.692h11.229l-3.016 3.583h3.584c0.823 0 1.495-0.692 1.495-1.536v-3.235c0-0.844-0.672-1.536-1.495-1.536zM28.011 13.593l-0.5 0.568-0.131 0.156z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib bancontact';
-->
