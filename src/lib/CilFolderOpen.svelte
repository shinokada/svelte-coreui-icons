<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil folder open';
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
  viewBox="0 0 512 512"
>
  <path
    fill="var(--ci-primary-color, {color})"
    d="M488.671,221.645a23.848,23.848,0,0,0-18.917-9.231h-66.2V160a23.138,23.138,0,0,0-23.112-23.111h-136.3L226.37,94.22A23.051,23.051,0,0,0,205.037,80H39.111A23.138,23.138,0,0,0,16,103.111V467.556H436.707l56.33-225.321A23.849,23.849,0,0,0,488.671,221.645ZM48,435.556V112H199.111l23.7,56.889H371.556v43.525H137.587A23.965,23.965,0,0,0,114.3,230.593L63.063,435.556Zm363.723,0H96.048l47.785-191.142H459.508Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil folder open';
-->
