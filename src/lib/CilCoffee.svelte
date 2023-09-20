<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil coffee';
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
    d="M191.5,376h97A111.627,111.627,0,0,0,400,264.5V248h24a72,72,0,0,0,0-144H80V264.5A111.627,111.627,0,0,0,191.5,376ZM400,136h24a40,40,0,0,1,0,80H400Zm-288,0H368V264.5A79.589,79.589,0,0,1,288.5,344h-97A79.589,79.589,0,0,1,112,264.5Z"
  />
  <rect width="480" height="32" x="16" y="416" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil coffee';
-->
