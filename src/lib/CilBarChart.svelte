<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil bar chart';
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
    d="M136,416h88a24.028,24.028,0,0,0,24-24V184a24.028,24.028,0,0,0-24-24H136a24.028,24.028,0,0,0-24,24V392A24.028,24.028,0,0,0,136,416Zm8-224h72V384H144Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M424,16H336a24.028,24.028,0,0,0-24,24V392a24.028,24.028,0,0,0,24,24h88a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,424,16Zm-8,368H344V48h72Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="48 16 16 16 16 496 496 496 496 464 48 464 48 16"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil bar chart';
-->
