<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib open collective';
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
    d="M29.145 6.896c3.819 5.468 3.819 12.74 0 18.208l-4.129-4.131c1.713-3.093 1.713-6.853 0-9.947zM25.104 2.855l-4.131 4.129c-3.187-1.749-7.056-1.692-10.187 0.161-3.131 1.849-5.047 5.215-5.047 8.849 0 3.636 1.916 7 5.047 8.849s7 1.905 10.187 0.156l4.131 4.145c-4.891 3.391-11.26 3.781-16.531 1.021s-8.579-8.224-8.579-14.172c0-5.953 3.308-11.411 8.579-14.177 5.271-2.76 11.64-2.364 16.531 1.021zM29.145 6.896c3.819 5.468 3.819 12.74 0 18.208l-4.129-4.131c1.713-3.093 1.713-6.853 0-9.947z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib open collective';
-->
