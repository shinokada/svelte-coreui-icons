<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib azure pipelines';
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
    d="M2.401 24h-2.401v8h8v-2.401h-5.599zM30.667 0h-11.906c-0.896-0.005-1.729 0.443-2.229 1.188l-4.531 6.797h-10.667c-0.734 0-1.333 0.599-1.333 1.333v7.333l4.667 4.818 1.599-1.724 2 2-1.599 1.63 1.974 1.974 1.625-1.63 2 2.016-1.599 1.599 4.667 4.667h7.333c0.734 0 1.333-0.599 1.333-1.333v-10.667l6.813-4.531c0.75-0.5 1.193-1.344 1.188-2.24v-11.896c0-0.734-0.599-1.333-1.333-1.333zM24 12c-5.333 0-5.333-8 0-8s5.333 8 0 8z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib azure pipelines';
-->
