<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib gitpod';
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
    d="M4.802 22.667v-12.531l-2.802-1.604v15.734l13.599 7.734v-3.198zM15.599 25.599v-9.198l-8-4.667v9.333zM16 3.198l10.802 6.271 2.797-1.604-13.599-7.865-13.599 7.865 2.797 1.604zM24 11.068l-8-4.667-8 4.667 8 4.667zM16.401 25.734l8-4.667v-3.203l-5.469 3.203v-3.203l8.266-4.797v9.599l-10.797 6.135v3.198l13.599-7.734v-15.734l-13.599 7.87z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib gitpod';
-->
