<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib pingup';
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
    d="M18.224 0h-15.927v32h10.047v-19.041h-3.683c-0.672 0-0.864-0.423-0.427-0.932l5.765-6.724c0.437-0.516 1.156-0.516 1.593 0l5.767 6.724c0.421 0.509 0.239 0.932-0.439 0.932h-3.681v8.901h0.973c8.303 0 11.489-5.745 11.489-11.313 0.016-5.339-3.484-10.547-11.479-10.547z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib pingup';
-->
