<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib android';
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
    d="M32 25.333h-32c0.318-2.896 1.328-5.672 2.948-8.094 1.245-1.922 2.911-3.531 4.88-4.708l0.547-0.302-2.693-4.547c-0.198-0.323-0.094-0.74 0.224-0.938 0.318-0.188 0.734-0.083 0.922 0.24l2.771 4.667c2.052-0.818 4.245-1.224 6.453-1.198 2.172-0.026 4.323 0.38 6.333 1.198l2.76-4.667c0.193-0.323 0.615-0.427 0.932-0.224 0.318 0.198 0.411 0.615 0.214 0.932l-2.693 4.562 0.667 0.37c1.958 1.224 3.615 2.87 4.839 4.828 1.531 2.385 2.521 5.073 2.896 7.88zM22 19.359c0 0.74 0.599 1.333 1.333 1.333s1.333-0.594 1.333-1.333c0-0.734-0.599-1.333-1.333-1.333s-1.333 0.599-1.333 1.333zM7.333 19.359c0 0.74 0.599 1.333 1.333 1.333s1.333-0.594 1.333-1.333c0-0.734-0.599-1.333-1.333-1.333s-1.333 0.599-1.333 1.333z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib android';
-->
