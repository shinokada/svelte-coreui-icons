<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib drone';
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
    d="M20.093 18.177c0 2.26-1.833 4.093-4.093 4.093s-4.093-1.833-4.093-4.093c0-5.459 8.187-5.459 8.187 0zM16 2.473c7.145 0.057 15.271 5.095 16 14.589h-9.677c0 0-1.244-5.245-6.323-5.208-5.079 0.031-6.323 5.208-6.323 5.208h-9.677c0.469-9.328 8.459-14.647 16-14.589zM16.068 29.527c-5.328 0.015-10.308-4.005-12.349-10.235h5.959c0 0 1.281 5.187 6.359 5.151 5.084-0.031 6.292-5.151 6.292-5.151h5.953c-1.328 6.588-6.885 10.219-12.213 10.235z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib drone';
-->
