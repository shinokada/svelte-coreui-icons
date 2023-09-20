<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil filter frames';
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
    d="M384,104H128V340.117H384ZM352,308.117H160V136H352Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M181.49,428.117,256,502.628l74.51-74.511H440a32.036,32.036,0,0,0,32-32V48a32.036,32.036,0,0,0-32-32H72A32.036,32.036,0,0,0,40,48V396.117a32.036,32.036,0,0,0,32,32ZM72,48H440V396.117H317.255L256,457.372l-61.255-61.255H72Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil filter frames';
-->
