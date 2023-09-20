<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil 4k';
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
    points="208 184 176 184 176 272 113.68 272 127.28 136 95.12 136 78.32 304 176 304 176 376 208 376 208 304 240 304 240 272 208 272 208 184"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="386.111 136 334.111 240 304 240 304 136 272 136 272 376 304 376 304 272 334.111 272 386.111 376 421.889 376 361.889 256 421.889 136 386.111 136"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M464,16H48A32.036,32.036,0,0,0,16,48V464a32.036,32.036,0,0,0,32,32H464a32.036,32.036,0,0,0,32-32V48A32.036,32.036,0,0,0,464,16Zm0,448H48V48H464l.02,416Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil 4k';
-->
