<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil hd';
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
    d="M364,136H272V376h92a52.059,52.059,0,0,0,52-52V188A52.059,52.059,0,0,0,364,136Zm20,188a20.023,20.023,0,0,1-20,20H304V168h60a20.023,20.023,0,0,1,20,20Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="208 240 128 240 128 136 96 136 96 376 128 376 128 272 208 272 208 376 240 376 240 136 208 136 208 240"
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
@prop export let ariaLabel = 'cil hd';
-->
