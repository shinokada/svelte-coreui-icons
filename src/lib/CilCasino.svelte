<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil casino';
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
    d="M495.24,267.592,445.066,41.083A32.038,32.038,0,0,0,406.9,16.76L180.393,66.934A32,32,0,0,0,156.071,105.1L177.092,200H48a32.036,32.036,0,0,0-32,32V464a32.036,32.036,0,0,0,32,32H280a32.036,32.036,0,0,0,32-32V340.957l158.917-35.2A32.038,32.038,0,0,0,495.24,267.592ZM280,464H48V232H184.181l22.063,99.606a32.031,32.031,0,0,0,31.18,25.092,32.3,32.3,0,0,0,6.984-.769l35.6-7.886L280.02,464ZM464,274.513,237.487,324.686,187.314,98.176,413.824,48l50.193,226.505Z"
  />
  <rect width="40" height="40" x="80" y="264" fill="var(--ci-primary-color, {color})" />
  <rect width="40" height="40" x="80" y="392" fill="var(--ci-primary-color, {color})" />
  <rect width="40" height="40" x="208" y="392" fill="var(--ci-primary-color, {color})" />
  <rect width="40" height="40" x="144" y="328" fill="var(--ci-primary-color, {color})" />
  <rect
    width="40"
    height="40"
    x="229.329"
    y="117.7"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-12.48 249.647 137.846)"
  />
  <rect
    width="40"
    height="40"
    x="381.981"
    y="214.989"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-12.489 401.996 234.995)"
  />
  <rect
    width="40"
    height="40"
    x="305.655"
    y="166.345"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-12.49 325.645 186.34)"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil casino';
-->
