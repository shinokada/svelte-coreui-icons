<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib sourceforge';
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
    d="M3.24 15.146c0-0.495 0.406-0.938 0.901-0.938h9.292c0.359-0.005 0.646-0.292 0.646-0.651v-1.938c0-0.365-0.292-0.651-0.651-0.651h-10.188c-1.786 0-3.24 1.448-3.24 3.234v3.594c0 1.792 1.448 3.245 3.234 3.245h6.693c0.5 0 0.901 0.438 0.901 0.938v1.714c0 0.495-0.401 0.943-0.901 0.943h-9.281c-0.359 0-0.646 0.286-0.646 0.646v1.938c0 0.359 0.292 0.646 0.646 0.646h10.193c1.786 0 3.234-1.448 3.234-3.234v-3.594c0-1.786-1.448-3.24-3.234-3.24h-6.698c-0.5 0-0.901-0.443-0.901-0.938zM31.359 10.974h-6.703v-3.609h6.698c0.354 0 0.641-0.286 0.641-0.646v-1.938c0-0.365-0.286-0.651-0.646-0.651h-6.693c-1.786 0-3.234 1.453-3.234 3.24v3.604h-3.104c-0.359 0-0.641 0.292-0.641 0.651v1.943c0 0.359 0.286 0.646 0.641 0.646h3.099v10.604c0 0.318 0.135 0.38 0.406 0.38 0.651 0 2.833-1.214 2.833-2.25v-8.74h6.698c0.354 0 0.646-0.286 0.646-0.641v-1.948c0-0.354-0.292-0.646-0.646-0.646z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib sourceforge';
-->
