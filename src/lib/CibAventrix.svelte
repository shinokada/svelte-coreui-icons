<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib aventrix';
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
    d="M16 32c-8.839 0-16-7.161-16-16s7.161-16 16-16c8.839 0 16 7.161 16 16s-7.161 16-16 16zM23.161 21.151c-0.307 0.214-0.859 0.427-1.443 0.427-0.615 0-1.073-0.245-1.073-1.135v-6.682c0-4.198-1.87-5.76-5.516-5.76-2.026 0-3.833 0.49-4.875 1.104-0.432 0.703-0.521 1.901-0.307 2.667 1.411-0.87 3.031-1.339 4.688-1.349 2.391 0 3.375 1.073 3.375 3.615v0.802c-0.891-0.37-2.052-0.49-3.063-0.49-3.469 0-6.135 1.469-6.135 5.057 0 3.339 2.302 4.594 4.938 4.594 2.021 0 3.432-0.641 4.323-1.807h0.12c0.245 1.135 1.047 1.807 2.422 1.807h0.016c0.74 0 1.432-0.203 2.026-0.563l-0.016 0.010c0.396-0.552 0.583-1.5 0.521-2.297zM14.422 21.578c-1.656 0-2.943-0.708-2.943-2.297 0-1.63 1.318-2.76 3.865-2.76 0.906-0.005 1.813 0.151 2.667 0.458v3.005c-0.797 1.167-2.271 1.594-3.589 1.594z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib aventrix';
-->
