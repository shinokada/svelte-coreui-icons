<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib flattr';
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
    d="M2.541 16c0-7.421 6.037-13.459 13.459-13.459 0.063 0 5.339 0 7.271 0l-3.896 3.907 1.792 1.792 8.036-8.24h-13.203c-8.839 0-16 7.161-16 16v12.443l2.547-2.349v-0.124c-0.005-0.329-0.005-9.876-0.005-9.969zM32 3.557l-2.547 2.349v0.124l0.005 9.969c0 7.421-6.037 13.459-13.459 13.459-0.063 0-5.339 0-7.271 0l3.896-3.907-1.792-1.792-8.036 8.24h13.203c8.839 0 16-7.161 16-16z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib flattr';
-->
