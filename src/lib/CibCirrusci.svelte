<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib cirrusci';
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
    d="M29.875 20.635c1.349 1.161 2.125 2.854 2.125 4.635 0 3.375-2.74 6.125-6.104 6.125h-24.411c-1.979 0-1.979-2.969 0-2.969h24.411c1.734-0.010 3.135-1.417 3.135-3.156 0-1.734-1.401-3.141-3.135-3.151h-24.411c-1.979 0-1.979-2.969 0-2.969h24.411c1.734-0.005 3.135-1.417 3.135-3.151s-1.401-3.146-3.135-3.151h-24.411c-1.979 0-1.979-2.969 0-2.969h24.411c1.729 0 3.135-1.417 3.135-3.151 0-1.74-1.406-3.156-3.135-3.156-1.979 0-1.979-2.969 0-2.969 3.365 0 6.104 2.75 6.104 6.125 0 1.849-0.828 3.51-2.125 4.635 1.349 1.161 2.125 2.854 2.125 4.635 0 1.854-0.828 3.516-2.125 4.635z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib cirrusci';
-->
