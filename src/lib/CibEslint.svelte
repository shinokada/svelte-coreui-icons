<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib eslint';
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
    d="M9.677 12.177l6.077-3.511c0.152-0.088 0.339-0.088 0.491 0l6.077 3.511c0.151 0.088 0.245 0.249 0.245 0.427v7.016c0 0.177-0.095 0.339-0.245 0.427l-6.077 3.505c-0.152 0.088-0.339 0.088-0.491 0l-6.077-3.505c-0.151-0.088-0.245-0.249-0.245-0.427v-7.016c0-0.177 0.095-0.339 0.245-0.427zM31.803 15.375l-7.261-12.635c-0.265-0.459-0.749-0.792-1.281-0.792h-14.52c-0.527 0-1.016 0.333-1.281 0.792l-7.261 12.604c-0.26 0.463-0.26 1.031 0 1.489l7.267 12.531c0.26 0.459 0.749 0.688 1.276 0.688h14.525c0.527 0 1.011-0.224 1.276-0.683l7.261-12.547c0.265-0.448 0.265-1.005 0-1.448zM25.792 21.448c-0.005 0.188-0.109 0.359-0.271 0.453l-9.256 5.333c-0.161 0.093-0.359 0.093-0.52 0l-9.261-5.333c-0.161-0.095-0.265-0.265-0.271-0.453v-10.677c0-0.183 0.109-0.355 0.271-0.448l9.251-5.339c0.161-0.088 0.359-0.088 0.52 0l9.261 5.339c0.161 0.093 0.265 0.265 0.271 0.453z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib eslint';
-->
