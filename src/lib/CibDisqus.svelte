<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib disqus';
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
    d="M16.584 31.536c-3.803 0-7.281-1.385-9.969-3.687l-6.615 0.905 2.557-6.307c-0.891-1.969-1.391-4.145-1.391-6.448 0-8.584 6.901-15.536 15.421-15.536 8.505 0 15.412 6.952 15.412 15.536s-6.901 15.536-15.416 15.536zM25.005 15.959v-0.047c0-4.485-3.167-7.677-8.62-7.677h-5.88v15.536h5.797c5.495 0 8.703-3.333 8.703-7.812h0.005zM16.453 19.953h-1.724v-7.901h1.724c2.525 0 4.208 1.443 4.208 3.927v0.043c0 2.509-1.683 3.932-4.208 3.932z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib disqus';
-->
