<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil chart';
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
    d="M124,136H36a20.023,20.023,0,0,0-20,20V476a20.023,20.023,0,0,0,20,20h88a20.023,20.023,0,0,0,20-20V156A20.023,20.023,0,0,0,124,136ZM112,464H48V168h64Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M300,240H212a20.023,20.023,0,0,0-20,20V476a20.023,20.023,0,0,0,20,20h88a20.023,20.023,0,0,0,20-20V260A20.023,20.023,0,0,0,300,240ZM288,464H224V272h64Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M476,16H388a20.023,20.023,0,0,0-20,20V476a20.023,20.023,0,0,0,20,20h88a20.023,20.023,0,0,0,20-20V36A20.023,20.023,0,0,0,476,16ZM464,464H400V48h64Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil chart';
-->
