<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil beaker';
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
  viewBox="0 0 512 512"
>
  <path
    fill="var(--ci-primary-color, {color})"
    d="M80,495.918l352.039.08h.006a24,24,0,0,0,24-24.008L456,354.472a23.9,23.9,0,0,0-4.239-13.613L344,184.511V121h40a24.028,24.028,0,0,0,24-24V16H104V97a24.027,24.027,0,0,0,24,24h39.917v64.621L60.276,340.834A23.9,23.9,0,0,0,56,354.509V471.918A24.029,24.029,0,0,0,80,495.918ZM199.917,195.631V89H136V48H376V89H312V194.47L376.465,288H135.859ZM88,357.011,113.667,320H398.52L424,356.971,424.037,464,88,463.92Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil beaker';
-->
