<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib hp';
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
    d="M16 32h-0.531l3.333-8.932h4.531c0.802 0 1.599-0.667 1.865-1.333l3.604-9.734c0.531-1.599-0.401-2.932-2-2.932h-6.271l-8.13 22.531c-7.203-1.734-12.401-8-12.401-15.599 0-7.333 4.932-13.469 11.734-15.469l-3.068 8.536-5.198 14h3.333l4.266-11.87h2.531l-4.266 11.87h3.333l4-11.068c0.531-1.599-0.266-2.932-2-2.932h-2.667l3.333-9.068h0.667c8.802 0 16 7.198 16 16s-7.198 16-16 16zM25.734 11.068h-2.536l-3.599 9.734h2.536z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib hp';
-->
