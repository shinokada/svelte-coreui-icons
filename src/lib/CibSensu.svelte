<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib sensu';
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
    d="M32 16l-16-16-16 16 16 16zM16 4.26l5.891 5.891c-1.927-0.51-3.906-0.781-5.891-0.781s-3.964 0.266-5.891 0.786zM10.76 22.495c1.583-0.88 3.375-1.344 5.24-1.344s3.656 0.464 5.24 1.344l-5.24 5.245zM23.438 20.297c-2.26-1.438-4.849-2.161-7.438-2.161s-5.177 0.724-7.438 2.161l-4.135-4.135c3.333-2.448 7.354-3.776 11.573-3.776s8.24 1.328 11.573 3.776z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib sensu';
-->
