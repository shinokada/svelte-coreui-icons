<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib laravel horizon';
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
    d="M27.313 4.688c-6.245-6.25-16.375-6.25-22.625-0.005-3.005 3-4.693 7.073-4.688 11.313-0.010 4.688 2.036 9.135 5.599 12.177h0.016c6.349 5.417 15.797 5.042 21.698-0.859 6.25-6.245 6.25-16.375 0-22.625zM21.333 18.661c-5.333 0-5.333-5.333-10.667-5.333-3.333 0-4.589 2.089-6.354 3.656h-0.005c-0.547-6.458 4.25-12.135 10.708-12.682 6.458-0.542 12.13 4.25 12.677 10.708-1.771 1.568-3.026 3.651-6.359 3.651z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib laravel horizon';
-->
