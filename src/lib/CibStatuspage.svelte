<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib statuspage';
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
    d="M16.010 12.797c2.005-0.026 3.938 0.75 5.365 2.161 1.427 1.406 2.234 3.328 2.234 5.333s-0.807 3.927-2.234 5.339c-1.427 1.406-3.359 2.188-5.365 2.161-4.099-0.057-7.396-3.396-7.396-7.5 0-4.099 3.297-7.443 7.396-7.495zM0.203 11.625l4.031 4.76c0.307 0.37 0.854 0.411 1.214 0.094 6.516-5.839 14.63-5.839 21.12 0 0.365 0.318 0.911 0.276 1.224-0.094l4.005-4.76c0.307-0.365 0.26-0.901-0.099-1.208-9.464-8.276-21.948-8.276-31.406 0-0.354 0.313-0.391 0.849-0.089 1.208z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib statuspage';
-->
