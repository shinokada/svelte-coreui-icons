<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil fastfood';
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
    d="M474.183,120H360V40H328v80H200v32h17.92l6.154,48H112a80.091,80.091,0,0,0-80,80v16H312V280a79.508,79.508,0,0,0-8-34.846,80.248,80.248,0,0,0-47.155-41.185L250.183,152H437.817l-35.9,280H32v32H430.08l40-312H496V120ZM277.258,264H66.742A48.083,48.083,0,0,1,112,232H232A48.083,48.083,0,0,1,277.258,264Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="304 352 312 352 312 320 304 320 184 320 32 320 32 352 184 352 304 352"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="304 408 312 408 312 376 304 376 184 376 32 376 32 408 184 408 304 408"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil fastfood';
-->
