<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil drink';
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
    d="M273.637,128l3.809,32h96.43l-8,64H252.573l-7.442-64h.089l-3.809-32h0l-.045-.389-9.041-77.745L230.247,32H104V64h97.753l7.442,64H117.876l40.5,323.969A32.051,32.051,0,0,0,190.125,480h147.75a32.051,32.051,0,0,0,31.753-28.031L410.124,128ZM154.124,160h58.792l7.442,64H162.124ZM337.889,448H190.124l-24-192h57.955l13.953,120h32.215L256.293,256H361.88Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil drink';
-->
