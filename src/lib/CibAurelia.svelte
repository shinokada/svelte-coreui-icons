<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib aurelia';
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
    d="M20.953 6.183l-2.969 1.979-3.057-4.583 2.969-1.985zM23.369 19.959l5.073 7.604-6.041 4.031-5.964-8.932 6.047-4.031zM15.755 25.036l1.12 1.672-4.604 3.073-2-3 4.599-3.073zM25.885 16.36l1.292-0.86 2 3-2.969 1.984-1.12-1.677 1.683-1.119zM25.088 18.807l-0.885-1.328 1.683-1.119 0.885 1.328zM5.057 16.792l-1.005 0.672-3.063-4.589 4.604-3.068 2.147 3.215 0.911 1.369zM15.349 7.937l0.916 1.375-6.047 4.032-0.912-1.371-5.025-7.536 6.041-4.031zM19.667 7.041l-1.683 1.12-0.911-1.369-2.147-3.213 2.969-1.985 3.063 4.589zM12.161 27.437l-0.885-1.328 3.593-2.401 0.885 1.328zM25.088 18.807l-0.885-1.328 1.683-1.119 0.885 1.328zM5.057 16.792l-0.917-1.371 3.6-2.4 0.911 1.369zM17.984 8.161l-0.911-1.369 1.676-1.12 0.917 1.369zM23.369 19.959l-6.047 4.031-0.885-1.328 6.047-4.031zM15.349 7.937l0.916 1.375-6.047 4.032-0.912-1.371zM3.344 6.844l1.14 1.708-1.713 1.141-1.14-1.709zM9.505 27.339l1.14 1.713-1.713 1.141-1.14-1.715zM5.005 29.063l-5.005-7.563 26.749-17.891 5.251 7.437z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib aurelia';
-->
