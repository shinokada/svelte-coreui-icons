<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil highligt';
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
    d="M104,305.5l88,48V480H320V353.5l88-48V160H104ZM136,192H376v94.5l-88,48V448H224V334.5l-88-48Z"
  />
  <rect width="32" height="72" x="240" y="32" fill="var(--ci-primary-color, {color})" />
  <rect
    width="32"
    height="72"
    x="82.544"
    y="50.544"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-45 98.545 86.544)"
  />
  <rect
    width="72"
    height="32"
    x="377.456"
    y="70.544"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-45 413.453 86.545)"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil highligt';
-->
