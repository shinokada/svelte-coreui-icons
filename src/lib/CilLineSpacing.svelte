<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil line spacing';
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
  <rect width="256" height="32" x="240" y="48" fill="var(--ci-primary-color, {color})" />
  <rect width="256" height="32" x="240" y="176" fill="var(--ci-primary-color, {color})" />
  <rect width="256" height="32" x="240" y="304" fill="var(--ci-primary-color, {color})" />
  <rect width="256" height="32" x="240" y="432" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M24,368v30.19l88.937,97.728L200,398.089V368H127.2V144H200V113.81L111.063,16.082,24,113.911V144H95.2V368ZM68.538,112l42.791-48.082L155.086,112Zm86.924,288-42.791,48.082L68.914,400Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil line spacing';
-->
