<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib monkeytie';
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
    d="M26.667 0h-21.333c-2.948 0-5.333 2.385-5.333 5.333v21.333c0 2.948 2.385 5.333 5.333 5.333h21.333c2.948 0 5.333-2.385 5.333-5.333v-21.333c0-2.948-2.385-5.333-5.333-5.333zM16.448 21.729l-1.156-9.016-3.437 6.188-3.443-6.167-1.147 8.995h-2.572l1.864-13.448h2.016l3.276 6.12 3.276-6.12h2.015l1.865 13.448zM25.151 14.079h-2.115v4.343c0 1.459 0.12 1.537 1.464 1.537h0.651l-0.224 1.959h-1.724c-1.807 0-2.572-1.267-2.572-2.516v-5.333h-1.371l0.209-1.959h1.135v-2.104l2.391-0.251v2.365h2.115v1.959zM27.385 21.917h-1.973l0.208-1.98h1.984l-0.229 1.975z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib monkeytie';
-->
