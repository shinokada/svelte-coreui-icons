<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib dev to';
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
    d="M9.896 13.401c-0.245-0.213-0.615-0.308-1.125-0.308h-0.771l0.027 3.256 0.052 3.265 0.749-0.027c0.547 0 0.839-0.093 1.104-0.348 0.323-0.319 0.349-0.48 0.349-2.933 0-2.547-0.027-2.613-0.385-2.905zM0 6.588v18.824h32v-18.824zM11.412 20.401c-0.584 0.771-1.412 1.025-3.371 1.025h-1.76v-10.052h1.864c2.229 0 2.881 0.24 3.469 1.199 0.359 0.572 0.385 0.801 0.427 3.427 0.063 2.973-0.025 3.64-0.629 4.401zM18.197 13.104h-3.291v2.365h2.025v1.703l-0.959 0.057-1 0.036v2.36l1.625 0.041 1.599 0.052v1.708h-2.129c-2.041 0-2.136-0.015-2.495-0.4l-0.401-0.376v-4.213c0-4.025 0.016-4.24 0.333-4.635 0.307-0.417 0.333-0.417 2.511-0.417h2.181v1.735zM24.437 20.375c-0.224 0.573-0.849 1.052-1.333 1.052-0.24 0-0.599-0.197-0.891-0.52-0.427-0.428-0.599-0.839-1.093-2.771l-1.199-4.521-0.604-2.229h1.016c0.531 0 1 0.027 1 0.068 0 0.077 1.547 6.052 1.683 6.443 0.052 0.197 0.421-0.937 0.968-3.068l0.88-3.359 0.991-0.057c0.531-0.027 0.973 0 0.973 0.057 0 0.181-2.229 8.504-2.401 8.905z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib dev to';
-->
