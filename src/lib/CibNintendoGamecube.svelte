<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib nintendo gamecube';
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
    d="M9.088 20.172l6.272 3.62v-7.245l-6.277-3.62v7.245zM6.385 21.729l8.975 5.177v5.093l-13.387-7.724v-15.453l4.412 2.547zM16 8.193l-6.271 3.624 6.271 3.62 6.271-3.62-6.271-3.62zM16 5.083l7.547 4.371 4.412-2.547-11.959-6.907-13.369 7.719 4.411 2.541zM25.609 21.729v-5.265l-2.697 1.557v2.151l-6.272 3.625v-7.245l13.387-7.724v15.448l-13.387 7.729v-5.088z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib nintendo gamecube';
-->
