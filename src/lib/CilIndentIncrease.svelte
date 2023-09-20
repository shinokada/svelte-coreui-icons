<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil indent increase';
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
  <rect width="424" height="32" x="72" y="63.998" fill="var(--ci-primary-color, {color})" />
  <rect width="296" height="32" x="200" y="151.998" fill="var(--ci-primary-color, {color})" />
  <rect width="296" height="32" x="200" y="239.998" fill="var(--ci-primary-color, {color})" />
  <rect width="296" height="32" x="200" y="327.998" fill="var(--ci-primary-color, {color})" />
  <rect width="424" height="32" x="72" y="415.998" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M16,144.909V367.091L171.527,256Zm32,62.182L116.473,256,48,304.909Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil indent increase';
-->
