<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil bus alt';
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
    d="M441.884,109.647A32.029,32.029,0,0,0,415.669,96H48a32.036,32.036,0,0,0-32,32V376H57.082a67.982,67.982,0,0,0,133.836,0H313.082a67.982,67.982,0,0,0,133.836,0H496V194.521a23.886,23.886,0,0,0-4.338-13.763ZM180,128H324v96H180ZM48,128H148v96H48Zm76,272a36,36,0,1,1,36-36A36.04,36.04,0,0,1,124,400Zm256,0a36,36,0,1,1,36-36A36.04,36.04,0,0,1,380,400Zm84-56H444.994a68,68,0,0,0-129.988,0H188.994a68,68,0,0,0-129.988,0H48V256H464Zm0-120H356V128h59.669L464,197.043Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil bus alt';
-->
