<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib rstudio';
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
    d="M16.24 0.005c-4.328-0.068-8.495 1.625-11.552 4.683-6.245 6.249-6.245 16.38 0 22.629 6.249 6.245 16.38 6.245 22.624 0 6.251-6.249 6.251-16.38 0-22.629-2.937-2.943-6.911-4.62-11.072-4.683zM10.36 7.995c0.749 0.167 1.4 0.287 2.219 0.287 1.228 0 2.484-0.287 3.713-0.287 2.385 0 4.599 1.084 4.599 3.735 0 2.052-1.229 3.353-3.131 3.907l3.713 5.473h1.735v1.349h-2.645l-4.391-6.584h-2.344v5.235h2.292v1.349h-5.76v-1.349h1.979v-11.599l-1.979-0.245v-1.276zM16.312 9.344c-0.791 0-1.615 0.068-2.484 0.167v5.068l1.255 0.025c3.063 0.041 4.245-1.135 4.245-2.703 0-1.833-1.328-2.557-3.016-2.557z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib rstudio';
-->
