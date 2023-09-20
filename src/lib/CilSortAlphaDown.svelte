<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil sort alpha down';
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
    points="206.392 382.863 154.509 434.745 154.509 17.177 122.509 17.177 122.509 434.745 70.627 382.863 48 405.49 138.509 496 229.019 405.49 206.392 382.863"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="291.313 457.177 435.313 457.177 435.313 425.177 326.274 425.177 435.313 324.445 435.313 281.177 299.313 281.177 299.313 313.177 400.353 313.177 291.313 413.909 291.313 457.177"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M343.781,49.177l-58.666,176h33.73l18.667-56h59.6l18.666,56h33.731l-58.666-176Zm4.4,88,18.667-56h.935l18.667,56Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil sort alpha down';
-->
