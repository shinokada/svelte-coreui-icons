<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib opera';
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
    d="M10.735 6.984c-1.771 2.089-2.917 5.177-2.995 8.641v0.749c0.083 3.464 1.224 6.552 2.995 8.641 2.296 2.979 5.703 4.869 9.52 4.869 2.339 0 4.532-0.713 6.407-1.959-2.823 2.537-6.563 4.073-10.661 4.073-0.255 0-0.511-0.005-0.76-0.021-8.491-0.395-15.24-7.395-15.24-15.979 0-8.839 7.161-16 16-16h0.063c4.073 0.016 7.787 1.552 10.599 4.073-1.875-1.24-4.068-1.959-6.411-1.959-3.813 0-7.224 1.891-9.521 4.869zM32 16c0 4.74-2.063 8.995-5.339 11.927-4.099 2-7.927 0.6-9.192-0.276 4.031-0.885 7.077-5.755 7.077-11.651s-3.047-10.765-7.077-11.651c1.265-0.876 5.093-2.271 9.192-0.276 3.276 2.927 5.339 7.187 5.339 11.927z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib opera';
-->
