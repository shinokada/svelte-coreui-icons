<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil scrubber';
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
    d="M425.856,87.379A239.364,239.364,0,1,0,87.344,425.892,239.364,239.364,0,1,0,425.856,87.379ZM256.6,464C142.259,464,49.235,370.977,49.235,256.635S142.259,49.271,256.6,49.271s207.364,93.023,207.364,207.364S370.941,464,256.6,464Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M256.6,192.635a64,64,0,1,0,64,64A64.073,64.073,0,0,0,256.6,192.635Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256.6,288.635Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil scrubber';
-->
