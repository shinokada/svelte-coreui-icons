<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil command';
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
    d="M416,176a80,80,0,1,0-80-80v48H176V96a80,80,0,1,0-80,80h48V336H96a80,80,0,1,0,80,80V368H336v48a80,80,0,1,0,80-80H368V176ZM368,96a48,48,0,1,1,48,48H368ZM144,416a48,48,0,1,1-48-48h48Zm0-272H96a48,48,0,1,1,48-48ZM336,336H176V176H336Zm80,32a48,48,0,1,1-48,48V368Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil command';
-->
