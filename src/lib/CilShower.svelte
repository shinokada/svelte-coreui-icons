<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil shower';
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
    points="240.801 293.826 216.95 317.677 240.75 365.277 264.167 340.559 240.801 293.826"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="255.978 395.732 278.277 440.332 301.695 415.613 279.395 371.014 255.978 395.732"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="438.926 202.62 415.8 227.032 460.223 248.278 483.35 223.866 438.926 202.62"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="342.603 192.024 385.464 212.523 408.591 188.112 366.599 168.028 342.603 192.024"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="307.785 341.046 336.308 379.077 358.633 355.512 330.11 317.481 307.785 341.046"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="310.633 291.512 281.697 252.93 258.84 275.787 288.308 315.077 310.633 291.512"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="300.743 233.884 337.426 263.231 359.511 239.918 323.51 211.117 300.743 233.884"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="362.501 283.291 399.222 312.668 421.307 289.355 384.586 259.979 362.501 283.291"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M348.687,100.687l-26.24,26.239-24.718-24.718a111.609,111.609,0,0,0-157.839,0c-.342.341-.673.689-1.009,1.034A77.974,77.974,0,0,0,16,166.988V408H48V166.988a45.975,45.975,0,0,1,72.048-37.868A111.809,111.809,0,0,0,139.89,260.049l24.717,24.717-23.92,23.921,20,20,208-208ZM185.006,259.911l-22.489-22.489A79.611,79.611,0,0,1,275.1,124.835l22.489,22.49Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil shower';
-->
