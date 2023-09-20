<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil share boxed';
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
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="464 248 464 464 48 464 48 48 264 48 264 16 16 16 16 496 496 496 496 216 464 248"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M106.12,171.135A96.274,96.274,0,0,0,96,214.364V430.545h47.782l41.181-147.564a66.953,66.953,0,0,1,64.283-48.8H304V320h38.6L494.627,168.9,342.656,16H304v88H210.182A114.4,114.4,0,0,0,106.12,171.135ZM336,136V54.7L449.373,168.758,336,281.441V202.182H249.246a99.055,99.055,0,0,0-95.105,72.2L128,368.051V214.364a64.576,64.576,0,0,1,6.879-29.2l.292-.614A82.356,82.356,0,0,1,210.182,136Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil share boxed';
-->
