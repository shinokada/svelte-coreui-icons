<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil watch';
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
    d="M349.279,16H162.721L137.949,148.116a159.7,159.7,0,0,0,0,215.768L162.721,496H349.279l24.772-132.116a159.7,159.7,0,0,0,0-215.768Zm-160,32H322.721l13,69.311a159.752,159.752,0,0,0-159.434,0ZM322.721,464H189.279l-13-69.311a159.752,159.752,0,0,0,159.434,0ZM256,384A128,128,0,1,1,384,256,128.145,128.145,0,0,1,256,384Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil watch';
-->
