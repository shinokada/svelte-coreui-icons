<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib elastic cloud';
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
    d="M30.161 25.948c-3.021 3.771-7.594 5.969-12.427 5.974-4.833-0.005-9.406-2.203-12.427-5.974 3.026-3.766 7.599-5.953 12.427-5.948 5.010 0 9.521 2.349 12.427 5.974zM13.76 16c0-2.026 1.667-3.984 3.495-3.984h0.557c5.214 0 9.469-2.349 12.385-5.974-3.042-3.771-7.62-5.964-12.464-5.974-4.833 0-9.406 2.198-12.427 5.974-2.281 2.818-3.516 6.333-3.505 9.958 0 2.589 0.599 5.016 1.719 7.172 2.755-3.052 6.427-5.135 10.464-5.932-0.12-0.401-0.24-0.839-0.24-1.24z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib elastic cloud';
-->
