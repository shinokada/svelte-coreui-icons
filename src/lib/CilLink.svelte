<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil link';
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
    d="M457.47,55.833c-53.026-53.026-139.307-53.026-192.332,0L168.971,152,191.6,174.627,287.765,78.46A104,104,0,0,1,434.843,225.539l-96.167,96.167L361.3,344.333l96.167-96.167C510.5,195.14,510.5,108.86,457.47,55.833Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M225.539,434.843a104,104,0,0,1-147.078,0h0a104,104,0,0,1,0-147.078l90.511-90.511-22.627-22.627L55.833,265.138A136,136,0,1,0,248.166,457.47l90.51-90.51-22.627-22.627Z"
  />
  <rect
    width="320"
    height="32"
    x="93.824"
    y="243.48"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-45 253.823 259.48)"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil link';
-->
