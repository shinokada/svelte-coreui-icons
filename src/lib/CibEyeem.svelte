<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib eyeem';
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
    d="M4.896 12.24v-1.385h-4.896v7.629h4.907v-1.396h-3.323v-1.837h2.875v-1.355h-2.875v-1.656zM7.781 21.088l3.375-7.88h-1.651l-1.203 3.147-1.215-3.147h-1.645l2.063 4.808-1.349 3.072zM16.615 16.323v-0.593c0-1.641-1-2.62-2.521-2.62-1.572 0-2.681 1.041-2.681 2.745 0 1.692 1.109 2.744 2.724 2.744 1.233 0 2.244-0.719 2.427-1.713l-1.5-0.073c-0.115 0.365-0.448 0.584-0.969 0.584-0.672 0-1.072-0.423-1.104-1.073zM14.083 14.271c0.672 0 1 0.423 1.032 1.063h-2.125c0.041-0.672 0.464-1.063 1.093-1.063zM22.719 12.24v-1.385h-4.896v7.629h4.907v-1.396h-3.323v-1.837h2.875v-1.355h-2.875v-1.656zM30 13.104c-0.797 0-1.317 0.36-1.62 0.839-0.349-0.541-0.932-0.833-1.656-0.833s-1.151 0.271-1.385 0.64v-0.541h-1.407v5.276h1.489v-2.927c0-0.636 0.355-1.063 0.948-1.063 0.543 0 0.855 0.375 0.855 1.052v2.937h1.489v-3.109c0.063-0.531 0.391-0.88 0.923-0.88 0.567 0 0.875 0.38 0.875 1.052v2.937h1.489v-3.233c0-1.333-0.797-2.141-2-2.141z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib eyeem';
-->
