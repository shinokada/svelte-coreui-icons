<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib webstorm';
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
    d="M0 0v32h32v-32zM23.855 3.855c1.921 0 3.552 0.588 4.885 1.703l-1.48 2.224c-1.187-0.817-2.296-1.333-3.405-1.333-1.115 0-1.709 0.516-1.709 1.183v0.072c0 0.891 0.595 1.188 2.819 1.781 2.667 0.74 4.145 1.704 4.145 4v0.073c0 2.667-2 4.145-4.812 4.145-2-0.072-4-0.812-5.557-2.219l1.703-2.077c1.188 0.963 2.443 1.629 3.927 1.629 1.183 0 1.849-0.443 1.849-1.255v-0.079c0-0.739-0.443-1.109-2.667-1.703-2.667-0.667-4.292-1.407-4.292-4.073v-0.077c0-2.443 1.923-4 4.589-4zM2.369 4.145h3.037l2 7.709 2.296-7.709h2.224l2.224 7.709 2-7.709h3.109l-3.776 13.261h-2.52l-2.147-7.704-2.224 7.704h-2.443zM3.036 26h12v2h-12z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib webstorm';
-->
