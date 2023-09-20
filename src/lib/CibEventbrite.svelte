<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib eventbrite';
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
    d="M14 7.735c3.599-0.803 7.068 0.667 9.068 3.333l-15.599 3.599c0.531-3.333 3.061-6.136 6.531-6.932zM23.197 20.803c-1.197 1.728-3.061 3.061-5.197 3.463-3.599 0.803-7.068-0.667-9.068-3.463l15.599-3.469 2.537-0.531 4.932-1.068c0-1.068-0.136-2.136-0.401-3.068-2-8.667-10.531-13.864-19.197-11.864s-14 10.395-12 18.796c2 8.401 10.531 13.735 19.197 11.735 5.068-1.197 9.068-4.531 10.932-8.803 0.136-0.129-7.333-1.728-7.333-1.728z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib eventbrite';
-->
