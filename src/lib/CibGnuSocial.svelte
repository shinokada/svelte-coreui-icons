<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib gnu social';
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
    d="M5.625 0c-2.328 0-4.214 1.885-4.214 4.208v16.818c0 2.328 1.885 4.214 4.214 4.214h12.49c-0.026 4.755-6.438 6.76-6.438 6.76s10.849-0.052 12.406-6.76h2.292c2.323 0 4.208-1.885 4.208-4.214v-16.818c0-2.323-1.885-4.208-4.208-4.208zM11.656 3.375c0.099-0.021 0.177-0.005 0.234 0.042 0.448 0.401-0.74 0.792-0.646 2.755 0.042 0.859-0.214 1.526 1.438 1.526 1.099 0 0.641-0.979 2.026-0.979 0.875 0 1.151 0.578 1.25 1.021 0.094-0.438 0.365-1.021 1.24-1.021 1.385 0 0.932 0.974 2.031 0.974 1.651 0 1.391-0.667 1.432-1.526 0.099-1.958-1.089-2.354-0.641-2.75 0.052-0.052 0.13-0.057 0.229-0.026 0.667 0.188 2.141 2.078 2.182 2.87 0.052 0.948 0.052 2.438-1.354 3.214 1.589 1.552 1.802 3.625 1.802 3.625l-2.724-0.047c0 0-0.62-2.823-3.922-2.677-3.297 0.141-3.729 0.714-3.729 4.208 0 3.49 1.531 4.688 3.875 4.776 3.682 0.146 3.349-1.906 3.349-1.906l-1.724 0.094-0.958-2.583h5.88c0 2.823-1.193 7.219-6.786 6.932s-6.839-4.688-6.885-7.651c-0.026-1.635 0.25-3.469 1.599-4.766-1.401-0.776-1.375-2.266-1.375-3.219 0-1.172 1.505-2.781 2.182-2.896z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib gnu social';
-->
