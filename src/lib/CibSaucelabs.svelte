<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib saucelabs';
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
    d="M3.907 20.636l8.525 0.004-4.776 9.011c-4.749-2.905-7.651-8.077-7.656-13.651 0-8.823 7.177-16 16-16 2.349 0 4.584 0.511 6.588 1.416l-15.348 15.355h13.667l-10.052 10.156 4.151-7.839h-9.943c-0.459-1.536-0.427-3.088-0.427-3.088 0.009-6.287 5.109-11.369 11.391-11.364 0.124 0 0.249 0.004 0.375 0.004l1.459-1.463c-0.605-0.089-1.22-0.131-1.833-0.131-7.141 0-12.975 5.808-12.975 12.953 0 0-0.079 2.292 0.855 4.636zM24.339 2.355c4.755 2.9 7.656 8.072 7.661 13.645 0 8.823-7.177 16-16 16-2.271 0.005-4.521-0.479-6.588-1.421l15.233-15.349h-13.708l10.208-10.156-4.151 7.839h9.948c0.421 1.437 0.421 3.088 0.421 3.088-0.009 6.287-5.109 11.369-11.395 11.364-0.141 0-0.276-0.004-0.417-0.009l-1.448 1.463c7.089 1.037 13.677-3.869 14.713-10.957 0.089-0.615 0.136-1.24 0.136-1.86 0-1.588-0.292-3.161-0.865-4.64h-8.52z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib saucelabs';
-->
