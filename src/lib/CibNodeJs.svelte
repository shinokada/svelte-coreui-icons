<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib node js';
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
    d="M15.245 0.203l-12.49 7.24c-0.469 0.271-0.755 0.771-0.75 1.313v14.484c0 0.542 0.286 1.042 0.75 1.307l12.495 7.25c0.464 0.271 1.036 0.271 1.505 0l12.49-7.245c0.464-0.271 0.75-0.771 0.75-1.307v-14.49c0-0.542-0.286-1.042-0.755-1.313l-12.484-7.24c-0.464-0.271-1.042-0.271-1.505 0z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib node js';
-->
