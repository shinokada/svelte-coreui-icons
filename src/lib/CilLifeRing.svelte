<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil life ring';
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
    d="M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294Zm-80.04,236.745a111.781,111.781,0,0,0,0-134.078l68.218-68.218a207.579,207.579,0,0,1,0,270.514ZM176,256a80,80,0,1,1,80,80A80.091,80.091,0,0,1,176,256ZM391.257,98.116l-68.218,68.218a111.781,111.781,0,0,0-134.078,0L120.743,98.116a207.579,207.579,0,0,1,270.514,0ZM98.116,120.743l68.218,68.218a111.781,111.781,0,0,0,0,134.078L98.116,391.257a207.579,207.579,0,0,1,0-270.514Zm22.627,293.141,68.218-68.218a111.781,111.781,0,0,0,134.078,0l68.218,68.218a207.579,207.579,0,0,1-270.514,0Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil life ring';
-->
