<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil rss';
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
    d="M66,256v32c88.225,0,160,71.776,160,160h32C258,342.131,171.869,256,66,256Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M66,140v32c152.187,0,276,123.813,276,276h32a305.982,305.982,0,0,0-90.211-217.789A305.987,305.987,0,0,0,66,140Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M456.674,282.955a422.588,422.588,0,0,0-90.861-134.768A422.724,422.724,0,0,0,66,24V56c216.149,0,392,175.851,392,392h32A421.378,421.378,0,0,0,456.674,282.955Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M90,360a64,64,0,1,0,64,64A64.072,64.072,0,0,0,90,360Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,90,456Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil rss';
-->
