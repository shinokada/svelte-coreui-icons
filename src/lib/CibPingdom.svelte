<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib pingdom';
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
    d="M15.948 23.74l10.609-4.532-9.396 9.656c-0.167-1.749-0.577-3.479-1.213-5.124zM32 14.823c-6.803-0.312-13.609 0.552-20.115 2.563 1.365 1.427 2.505 3.052 3.38 4.828 5.385-3 12.86-6.833 16.735-7.375v-0.021zM15.235 15.193l0.276-0.084c2.052-0.609 4.068-1.355 6.031-2.208 1.989-0.776 3.86-1.839 5.547-3.156 1.792-1.423 3.141-3.329 3.885-5.495 0.163-0.355 0.281-0.729 0.355-1.115-2.697 3.676-13.385 4.061-13.385 4.061l2.521-2.312c-7.344 0.027-14.505 2.349-20.464 6.641 4.041 0.432 7.839 2.129 10.855 4.843 1.448-0.448 2.927-0.765 4.38-1.172z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib pingdom';
-->
