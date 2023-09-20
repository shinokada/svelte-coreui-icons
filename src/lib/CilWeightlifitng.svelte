<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil weightlifitng';
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
  <circle cx="256" cy="156" r="36" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M400,16V72H112V16H16V160h96V104h25.278l7.524,90.289,79.2,39.6V336H144.864l-7.413,133.426H169.5L175.136,368H336.864L342.5,469.426h32.05L367.136,336H288V233.889l79.2-39.6L374.722,104H400v56h96V16ZM80,72v56H48V48H80ZM336.8,173.71l-80.8,40.4-80.8-40.4L169.389,104H342.611ZM464,128H432V48h32Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil weightlifitng';
-->
