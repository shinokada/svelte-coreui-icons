<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib dependabot';
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
    d="M14.599 0.417c0.849-0.557 1.953-0.557 2.802 0l12.443 8.161c0.724 0.469 1.156 1.276 1.156 2.135v10.573c0 0.859-0.432 1.667-1.156 2.135l-12.443 8.161c-0.849 0.557-1.953 0.557-2.802 0l-12.443-8.161c-0.724-0.469-1.156-1.276-1.156-2.135v-10.573c0-0.859 0.432-1.667 1.156-2.135zM17 10v1h-8c-0.552 0-1 0.448-1 1v4h-0.667c-0.182 0-0.333 0.151-0.333 0.333v3.333c0 0.182 0.151 0.333 0.333 0.333h0.667v2c0 0.552 0.448 1 1 1h14c0.552 0 1-0.448 1-1v-2h0.667c0.182 0 0.333-0.151 0.333-0.333v-3.333c0-0.182-0.151-0.333-0.333-0.333h-0.667v-4c0-0.552-0.448-1-1-1h-5v-3.667c0-0.182-0.151-0.333-0.333-0.333h-2.333c-0.182 0-0.333 0.151-0.333 0.333v2.333c0 0.182 0.151 0.333 0.333 0.333zM21.38 16.786l-2.094 2.094c-0.156 0.156-0.417 0.156-0.573 0l-1.26-1.26c-0.156-0.156-0.156-0.417 0-0.573l0.427-0.427c0.156-0.156 0.417-0.156 0.573 0l0.547 0.547 1.38-1.38c0.156-0.156 0.417-0.156 0.573 0l0.427 0.427c0.156 0.156 0.156 0.417 0 0.573zM12.62 18.88c-0.156 0.156-0.417 0.156-0.573 0l-1.26-1.26c-0.161-0.156-0.161-0.417 0-0.573l0.427-0.427c0.156-0.156 0.411-0.156 0.573 0l0.547 0.547 1.38-1.38c0.156-0.161 0.411-0.161 0.573 0l0.427 0.427c0.156 0.156 0.156 0.411 0 0.573z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib dependabot';
-->
