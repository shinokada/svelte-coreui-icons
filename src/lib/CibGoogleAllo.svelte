<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib google allo';
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
    d="M15.552 0.005c-0.932 0.025-1.891 0.131-2.855 0.323-6.312 1.26-11.26 6.303-12.416 12.641-1.812 9.875 5.459 19.009 14.88 19.009l14.475 0.021c1.307 0 2.364-1.057 2.364-2.364v-13.636c0-8.984-7.407-16.24-16.448-15.995zM16 8.183c4.317 0 7.817 3.5 7.817 7.817v7.479c0 0.328-0.391 0.491-0.624 0.261l-1.948-1.948c-1.385 1.26-3.224 2.025-5.245 2.025-4.323 0-7.823-3.5-7.823-7.817s3.505-7.817 7.823-7.817z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib google allo';
-->
