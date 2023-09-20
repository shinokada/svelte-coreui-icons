<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil find in page';
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
    d="M334.627,16H48V496H472V153.373ZM440,464H80V48H321.373L440,166.627Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M239.861,152a95.861,95.861,0,1,0,53.624,175.284l68.03,68.029,22.627-22.626-67.5-67.5A95.816,95.816,0,0,0,239.861,152ZM176,247.861a63.862,63.862,0,1,1,63.861,63.861A63.933,63.933,0,0,1,176,247.861Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil find in page';
-->
