<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib the mighty';
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
    d="M25.573 0h-5.912l-3.593 18.651-3.656-18.651h-5.939c0.287 0.292 0.448 0.849 0.521 1.432v28.276c0 0.828-0.14 1.844-0.568 2.292 1.355-0.287 3.079-0.552 4.552-0.812v-18.688l3.319 16.5c0.093 0.615 0.181 1.448-0.027 1.599 1.131-0.172 2.26-0.339 3.391-0.489-0.14-0.213-0.083-0.869-0.005-1.416l3.271-16.496v17.464c1.407-0.167 3.156-0.323 4.625-0.468l0.021-0.011c-0.433-0.437-0.579-1.464-0.579-2.297v-24.583c0-0.839 0.141-1.865 0.579-2.303z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib the mighty';
-->
