<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib scrutinizerci';
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
    d="M19.813 0l-10.641 0.078c-2.031 0.443-3.818 1.641-4.995 3.344-0.87 1.016-1.49 2.224-1.807 3.521l-0.161 0.74-0.161 1.141c-0.078 1.068-0.078 1.802 0.161 1.964h7.036c0.078 0-0.25-0.328-0.25-0.896 0-0.984 0.333-1.234 0.734-1.641 0.74-0.568 3.927-0.161 6.307-0.328 3.26 0 6.135-0.078 6.464-0.161 3.599-0.568 6.703-3.182 7.359-6.047 0.161-0.729 0.161-1.474 0.083-1.552-0.083-0.161-1.385-0.161-10.13-0.161zM12.255 12.010c-5.010-0.021-9.958 0-10.042 0.078-0.167 0.167-0.078 1.063 0.083 1.802 0.432 1.443 1.286 2.729 2.458 3.682 1.271 1.057 2.792 1.786 4.417 2.12 0.484 0.167 1.391 0.167 6.125 0.167 5.651 0 6.557 0.078 6.964 0.318 0.188 0.141 0.354 0.307 0.495 0.5 0.24 0.318 0.24 0.406 0.24 1.302s-0.089 0.979-0.245 1.391c-0.156 0.198-0.349 0.365-0.568 0.49-0.25 0.161-0.411 0.161-5.813 0.24-6.224 0-6.875 0-8.422 0.578-1.214 0.349-2.333 0.964-3.281 1.797-1.552 1.385-2.458 2.938-2.62 4.573l0.083 0.813c6.844 0.188 13.693 0.188 20.536 0l0.656-0.161c0.339-0.078 0.667-0.188 0.984-0.323l0.49-0.24c2.208-1.271 3.87-3.313 4.667-5.729 0.849-2.661 0.672-5.547-0.5-8.083-0.74-1.49-1.802-2.802-3.104-3.839-0.974-0.635-2.052-1.078-3.193-1.313-0.328-0.083-5.401-0.141-10.411-0.161z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib scrutinizerci';
-->
