<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib circleci';
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
    d="M11.953 16c0-2.115 1.708-3.807 3.801-3.807 2.1 0 3.813 1.713 3.813 3.807s-1.713 3.807-3.813 3.807c-2.093 0-3.801-1.713-3.801-3.807zM15.755 0c-7.468 0-13.724 5.12-15.5 12.031-0.015 0.052-0.015 0.095-0.015 0.163 0 0.416 0.339 0.771 0.765 0.771h6.448c0.307 0 0.577-0.177 0.687-0.448 1.333-2.88 4.24-4.896 7.62-4.896 4.62 0 8.38 3.76 8.38 8.385s-3.76 8.385-8.385 8.385c-3.375 0-6.285-2-7.615-4.896-0.129-0.255-0.385-0.448-0.687-0.448h-6.448c-0.417 0-0.765 0.333-0.765 0.765 0 0.052 0.020 0.1 0.020 0.161 1.761 6.907 8.027 12.027 15.495 12.027 8.833 0 16-7.167 16-16 0-8.828-7.167-16-16-16z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib circleci';
-->
