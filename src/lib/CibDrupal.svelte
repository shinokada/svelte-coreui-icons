<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib drupal';
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
    d="M27.266 4.734c-2.922-3.057-6.953-4.724-11.266-4.724-8.76 0-15.99 7.229-15.99 15.99s7.229 15.99 15.99 15.99c8.76 0 15.995-7.229 15.995-15.99 0-4.313-1.672-8.344-4.729-11.266zM16 26.427c-4.865 0-8.76-3.891-8.76-8.755 0-4.036 2.781-6.818 5.146-9.182 1.667-1.667 3.198-3.198 3.615-5.005 0.417 1.667 1.948 3.198 3.615 4.865 2.365 2.365 5.146 5.146 5.146 9.182 0 4.865-3.891 8.76-8.76 8.896z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib drupal';
-->
