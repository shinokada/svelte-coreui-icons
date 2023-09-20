<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil infinity';
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
    d="M463.2,176.805a112,112,0,0,0-158.39,0l-48.57,48.568L207.667,176.8a112,112,0,1,0,0,158.392l48.568-48.569,48.57,48.569A112,112,0,1,0,463.2,176.805ZM185.04,312.569a80,80,0,1,1,0-113.138l55.2,55.2v2.746Zm255.528,0a80,80,0,0,1-113.136,0l-55.2-55.2v-2.744l55.2-55.2A80,80,0,1,1,440.568,312.569Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil infinity';
-->
