<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil usb';
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
    d="M320,224h32v40H272V78.627l17.941,17.941,22.627-22.627L256,17.373,199.432,73.941l22.627,22.627L240,78.627V264H168V221.659a56,56,0,1,0-32,0V296H240v90.341a56,56,0,1,0,32,0V296H384V224h40V120H320ZM128,168a24,24,0,1,1,24,24A24.027,24.027,0,0,1,128,168ZM280,440a24,24,0,1,1-24-24A24.027,24.027,0,0,1,280,440Zm72-288h40v40H352Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil usb';
-->
