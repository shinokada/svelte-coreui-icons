<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib instacart';
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
    d="M20.839 12.823c1.896 1.906 3.443 5.026 2.557 6.87-2.37 4.953-20.052 13.635-21.557 12.135-1.5-1.5 7.188-19.193 12.135-21.568 1.849-0.88 4.964 0.682 6.87 2.563l-0.005 0.021zM30.208 10.74c-0.307-1.141-1.094-2.292-2.266-2.427-2.146-0.25-5.536 3.547-5.297 4.448 0.245 0.922 5.026 2.5 6.802 1.224 0.922-0.661 1.042-2.083 0.74-3.219zM23.552 0.208c1.599 0.432 3.214 1.531 3.406 3.177 0.344 3.016-4.979 7.76-6.245 7.422-1.26-0.339-3.49-7.047-1.688-9.552 0.927-1.297 2.932-1.474 4.531-1.052v0.005z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib instacart';
-->
