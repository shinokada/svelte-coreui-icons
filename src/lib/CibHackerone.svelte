<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib hackerone';
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
    d="M9.609 0c-0.645 0-1.172 0.136-1.579 0.401-0.405 0.265-0.609 0.615-0.609 1.036v29.084c0 0.364 0.209 0.703 0.631 1.009 0.421 0.313 0.937 0.469 1.557 0.469 0.588 0 1.109-0.156 1.557-0.469 0.448-0.307 0.672-0.645 0.672-1.009v-29.079c0-0.427-0.213-0.771-0.651-1.041-0.439-0.265-0.959-0.401-1.579-0.401zM22.307 11.547c-0.645 0-1.161 0.136-1.557 0.401l-5.916 3.713c-0.265 0.245-0.38 0.625-0.333 1.141 0.047 0.509 0.281 0.995 0.697 1.452 0.423 0.459 0.891 0.751 1.428 0.871 0.525 0.12 0.927 0.057 1.192-0.188l2.344-1.464v13.048c0 0.364 0.203 0.703 0.609 1.009 0.401 0.313 0.917 0.469 1.536 0.469 0.62 0 1.152-0.156 1.6-0.469 0.448-0.307 0.672-0.645 0.672-1.009v-17.537c0-0.427-0.219-0.771-0.652-1.036-0.432-0.265-0.973-0.401-1.62-0.401z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib hackerone';
-->
