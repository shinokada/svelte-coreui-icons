<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib mixer';
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
    d="M3.276 1.833c-0.817 0-1.599 0.307-2.203 0.855-1.251 1.156-1.355 3.109-0.333 4.484l6.552 8.787-6.595 8.869c-1.015 1.375-0.937 3.328 0.339 4.484 1.428 1.303 3.667 1.089 4.824-0.457l9.208-12.376c0.219-0.301 0.219-0.713 0-1.015l-9.172-12.319c-0.615-0.828-1.589-1.317-2.62-1.312zM28.729 1.833c-1.036-0.005-2.011 0.484-2.625 1.312l-9.145 12.297c-0.224 0.303-0.224 0.713 0 1.016l9.181 12.396c1.157 1.547 3.396 1.76 4.824 0.457 1.276-1.156 1.353-3.109 0.339-4.484l-6.595-8.869 6.557-8.787c1.016-1.375 0.917-3.328-0.339-4.484-0.604-0.548-1.385-0.849-2.203-0.855z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib mixer';
-->
