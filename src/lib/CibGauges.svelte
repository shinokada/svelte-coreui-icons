<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib gauges';
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
    d="M16.802 16.849l-1.5-0.073c-1.26-0.042-1.599-0.109-1.599-0.578 0-0.182 0.135-0.427 0.406-0.563 0.219 0.047 0.448 0.073 0.677 0.073 3.219 0 4.839-1.563 4.839-3.974 0-0.401-0.099-0.76-0.302-0.979h1.281v-2.682h-3.802c-0.63-0.151-1.193-0.266-1.953-0.266-3.391 0-5.073 1.964-5.073 4.24 0 1.427 0.672 2.453 1.677 2.99-0.776 0.313-1.359 1.161-1.359 2.052 0 0.781 0.427 1.406 1.078 1.719-0.854 0.448-1.62 1.536-1.62 2.583 0 2.214 1.802 3.302 4.854 3.302 3.828 0 6.26-2.141 6.26-4.547h-0.026c0-2.229-1.438-3.214-3.839-3.297zM14.849 10.474c1.193 0 1.792 0.641 1.792 1.589s-0.667 1.521-1.766 1.521c-1.193 0-1.792-0.594-1.792-1.563 0-0.906 0.646-1.547 1.766-1.547zM17.526 20.547c0 0.839-0.813 1.484-2.427 1.484-1.255 0-2-0.542-2-1.339 0-0.469 0.302-0.943 0.802-1.328 0.12 0.021 0.302 0 0.443 0.021l1.797 0.042c1.063 0.042 1.443 0.516 1.443 1.12zM23.516 14.474c-1.318 0-2.432 1.115-2.432 2.458 0 1.349 1.115 2.432 2.432 2.432 1.349 0 2.464-1.083 2.464-2.432 0-1.344-1.12-2.458-2.464-2.458zM16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM16 29.781c-7.609 0-13.781-6.172-13.781-13.781s6.172-13.781 13.781-13.781c7.609 0 13.781 6.172 13.781 13.781s-6.172 13.781-13.781 13.781z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib gauges';
-->
