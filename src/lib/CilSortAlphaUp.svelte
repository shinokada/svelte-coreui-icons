<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil sort alpha up';
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
    points="75.313 130.313 127.196 78.432 127.196 496 159.196 496 159.196 78.432 211.079 130.314 233.706 107.687 143.196 17.177 52.687 107.687 75.313 130.313"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="440 280 304 280 304 312 405.04 312 296 412.732 296 456 440 456 440 424 330.96 424 440 323.268 440 280"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M395.532,48H348.468L289.8,224h33.73L342.2,168h59.6l18.667,56H454.2Zm-42.667,88,18.667-56h.936l18.667,56Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil sort alpha up';
-->
