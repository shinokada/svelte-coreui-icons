<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil paperclip';
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
    d="M153.456,472A136,136,0,0,1,57.289,239.834l196.6-196.6L276.52,65.857l-196.6,196.6A104,104,0,0,0,227,409.539L434.912,201.622A72,72,0,0,0,333.088,99.8L125.171,307.716a40,40,0,1,0,56.568,56.568L361.373,184.652,384,207.279,204.367,386.911A72,72,0,1,1,102.544,285.089L310.461,77.172A104,104,0,1,1,457.539,224.249L249.622,432.166A135.1,135.1,0,0,1,153.456,472Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil paperclip';
-->
