<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil media skip forward';
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
    d="M32,111.882V400.118A23.979,23.979,0,0,0,70.285,419.4L248,287.763V400.118A23.979,23.979,0,0,0,286.285,419.4l194.56-144.119a24,24,0,0,0,0-38.57L286.285,92.6A24,24,0,0,0,248,111.882V224.237L70.285,92.6A24,24,0,0,0,32,111.882Zm248,15.881L453.119,256,280,384.237Zm-216,0L237.119,256,64,384.237Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil media skip forward';
-->
