<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib crunchbase';
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
    d="M28.802 0h-25.604c-1.76 0.005-3.193 1.438-3.198 3.198v25.604c0.005 1.76 1.438 3.193 3.198 3.198h25.604c1.76-0.005 3.193-1.438 3.198-3.198v-25.604c-0.005-1.76-1.438-3.193-3.198-3.198zM9.396 19.286c1.411 0.646 3.078 0.021 3.724-1.391h2.214c-1.38 5.651-9.698 4.651-9.698-1.167 0-5.823 8.318-6.823 9.698-1.167h-2.214c-0.813-1.786-3.161-2.214-4.547-0.823-1.391 1.385-0.964 3.734 0.823 4.547zM24.521 20.411c-0.422 0.365-0.896 0.646-1.417 0.844-1.495 0.578-3.182 0.391-4.516-0.51v0.51h-2.016v-14.094h2v5.479c0.714-0.484 1.542-0.771 2.401-0.839h0.359c4.552-0.010 6.646 5.656 3.188 8.609zM24.224 16.724c0.031 1.573-1.234 2.87-2.807 2.87s-2.839-1.297-2.802-2.87c0.078-3.656 5.526-3.656 5.609 0z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib crunchbase';
-->
