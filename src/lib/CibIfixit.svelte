<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib ifixit';
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
    d="M20.459 16.677l3.161 4.172c0.265 0.348 0.281 0.921 0.031 1.281l-0.156 0.233c-0.24 0.365-0.735 0.865-1.083 1.109l-0.381 0.272c-0.353 0.26-0.932 0.26-1.276-0.027l-4.181-3.156c-0.339-0.26-0.907-0.26-1.251 0l-4.183 3.156c-0.343 0.287-0.921 0.287-1.276 0.041l-0.276-0.176c-0.359-0.245-0.853-0.745-1.099-1.084l-0.239-0.339c-0.251-0.359-0.24-0.921 0.020-1.281l3.172-4.197c0.26-0.344 0.26-0.901 0-1.261l-3.183-4.181c-0.255-0.349-0.271-0.923-0.015-1.276l0.265-0.38c0.249-0.349 0.749-0.839 1.104-1.084l0.235-0.161c0.359-0.26 0.937-0.24 1.281 0.021l4.181 3.161c0.344 0.26 0.912 0.26 1.256 0l4.177-3.183c0.343-0.26 0.932-0.303 1.307-0.084l0.437 0.261c0.375 0.224 0.855 0.697 1.063 1.083l0.161 0.276c0.204 0.38 0.161 0.964-0.099 1.323l-3.161 4.177c-0.26 0.344-0.26 0.907 0 1.261zM16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib ifixit';
-->
