<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib speaker deck';
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
    d="M14.932 18.131l0.027-4.261-3.557 2.147zM17.063 13.869l-0.021 4.256 3.557-2.147zM17.041 18.131v-0.005l-0.005 0.005zM31.995 6.12c0-1.172-0.953-2.12-2.131-2.12h-27.728c-1.177 0-2.136 0.953-2.136 2.12v19.76c0 1.172 0.953 2.12 2.136 2.12h27.728c1.177 0 2.136-0.953 2.136-2.12v-19.76zM23.416 18.839h-0.015c0 0.781-0.625 1.407-1.401 1.421l0.047-0.020h-12.093c-0.771-0.016-1.401-0.641-1.401-1.417h-0.005v-5.651h0.016c0-0.771 0.615-1.401 1.375-1.412h12.079c0.76 0.021 1.4 0.641 1.4 1.423v5.661z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib speaker deck';
-->
