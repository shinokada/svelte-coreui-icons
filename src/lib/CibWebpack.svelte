<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib webpack';
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
    d="M28.021 24.161l-11.552 6.505v-5.068l7.198-3.943zM28.813 23.448v-13.609l-4.229 2.432v8.745zM3.901 24.161l11.552 6.505v-5.068l-7.198-3.943zM3.109 23.448v-13.609l4.229 2.432v8.745zM3.604 8.958l11.849-6.672v4.901l-7.646 4.188zM28.318 8.958l-11.849-6.672v4.901l7.646 4.188zM15.453 24.448l-7.099-3.891v-7.703l7.099 4.083zM16.469 24.448l7.099-3.891v-7.703l-7.099 4.083zM8.833 11.964l7.13-3.901 7.13 3.901-7.13 4.099z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib webpack';
-->
