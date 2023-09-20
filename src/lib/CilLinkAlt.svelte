<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil link alt';
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
    d="M48,256a80.091,80.091,0,0,1,80-80H240V144H128a112,112,0,0,0,0,224H240V336H128A80.091,80.091,0,0,1,48,256Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M384,144H272v32H384a80,80,0,0,1,0,160H272v32H384a112,112,0,0,0,0-224Z"
  />
  <rect width="232" height="32" x="140" y="240.652" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil link alt';
-->
