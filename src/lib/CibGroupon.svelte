<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib groupon';
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
    d="M4.422 27.115c3.068 3.198 6.984 4.885 11.594 4.885 5.318 0 10.318-2.599 13.302-6.885 1.807-2.599 2.682-5.542 2.682-9.005 0-0.646-0.042-1.344-0.083-2.036h-17.792v6.146h8.917c-1.536 2.682-4.125 4.156-7.026 4.156-4.307 0-8.167-3.76-8.167-8.661 0-4.417 3.599-8.089 8.167-8.089 2.458 0 4.474 0.995 6.417 2.984h8.693c-2.5-6.583-8.344-10.609-15.016-10.609-4.427 0-8.292 1.563-11.37 4.547-3.073 2.984-4.74 6.88-4.74 11.125-0.010 4.557 1.479 8.359 4.422 11.443z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib groupon';
-->
