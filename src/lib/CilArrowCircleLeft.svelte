<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil arrow circle left';
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
    d="M256,16.042c-132.548,0-240,107.451-240,240s107.452,240,240,240,240-107.452,240-240S388.548,16.042,256,16.042ZM403.078,403.12A207.253,207.253,0,1,1,447.667,337,207.364,207.364,0,0,1,403.078,403.12Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="272.614 164.987 249.986 142.36 136.305 256.041 249.986 369.722 272.614 347.095 197.56 272.041 385 272.041 385 240.041 197.56 240.041 272.614 164.987"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil arrow circle left';
-->
