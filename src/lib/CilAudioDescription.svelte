<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil audio description';
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
    d="M472,64H40A24.028,24.028,0,0,0,16,88V424a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V88A24.028,24.028,0,0,0,472,64Zm-8,352H48V96H464Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M134.2,288h59.6l18.667,56H246.2L187.532,168H140.468L81.8,344h33.731Zm29.333-88h.936l18.667,56h-38.27Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M424,263.333V248.667A80.758,80.758,0,0,0,343.333,168H280V344h63.333A80.758,80.758,0,0,0,424,263.333ZM312,200h31.333A48.722,48.722,0,0,1,392,248.667v14.666A48.722,48.722,0,0,1,343.333,312H312Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil audio description';
-->
