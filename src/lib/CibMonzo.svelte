<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib monzo';
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
    d="M15.984 23.016h0.016l7.907-7.896v14.719c0.020 0.521 0.64 0.771 1.015 0.416l6.641-6.629c0.276-0.281 0.432-0.667 0.421-1.063v-15.511l0.016-0.011-5.307-5.296c-0.229-0.235-0.611-0.235-0.839 0l-9.855 9.843-9.88-9.869c-0.229-0.235-0.609-0.235-0.839 0l-5.281 5.323v15.547c-0.005 0.391 0.151 0.772 0.427 1.052l6.625 6.641c0.38 0.359 1.005 0.093 1.016-0.427l0.011-14.751 7.905 7.923z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib monzo';
-->
