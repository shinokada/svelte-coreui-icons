<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib swift';
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
    d="M29.312 21.797c0.073-0.152 0.073-0.297 0.152-0.448 1.791-7.032-2.469-15.256-9.797-19.589 3.213 4.333 4.484 9.495 3.364 14.131-0.072 0.375-0.224 0.823-0.375 1.197-0.203-0.115-0.405-0.239-0.599-0.375 0 0-7.251-4.484-15.027-12.339-0.224-0.224 4.188 6.281 9.12 11.443-2.317-1.348-8.896-6.057-13.011-9.869 0.448 0.817 1.125 1.64 1.797 2.464 3.437 4.411 7.927 9.796 13.308 13.905-3.813 2.323-9.12 2.469-14.505 0-1.344-0.593-2.469-1.344-3.74-2.239 2.245 3.515 5.76 6.728 9.948 8.448 5.011 2.171 10.093 2.020 13.755 0h0.079c0.145-0.073 0.297-0.152 0.448-0.297 1.792-0.901 5.307-1.869 7.249 1.869 0.527 1.047 1.495-3.812-2.167-8.301z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib swift';
-->
