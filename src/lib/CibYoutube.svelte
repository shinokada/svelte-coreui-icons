<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib youtube';
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
    d="M31.328 8.271c-0.38-1.349-1.432-2.407-2.787-2.781-2.495-0.667-12.525-0.667-12.525-0.667s-10.011-0.016-12.532 0.667c-1.348 0.375-2.405 1.432-2.781 2.781-0.473 2.557-0.708 5.145-0.697 7.745-0.005 2.583 0.229 5.167 0.697 7.708 0.376 1.349 1.433 2.407 2.781 2.787 2.495 0.667 12.532 0.667 12.532 0.667s10.005 0 12.525-0.667c1.355-0.38 2.407-1.437 2.787-2.787 0.459-2.541 0.683-5.125 0.667-7.708 0.016-2.6-0.203-5.188-0.667-7.745zM12.812 20.803v-9.595l8.349 4.808z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib youtube';
-->
