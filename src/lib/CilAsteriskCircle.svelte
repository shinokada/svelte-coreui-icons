<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil asterisk circle';
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
    points="272 227.616 272 121.388 240 121.388 240 227.617 141.377 167.935 138.946 171.952 138.946 203.867 225.096 256 138.946 308.133 138.946 340.048 141.377 344.065 240 284.383 240 390.612 272 390.612 272 284.384 370.623 344.065 373.054 340.049 373.054 308.134 286.903 256 373.054 203.866 373.054 171.951 370.623 167.935 272 227.616"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M425.857,87.379A239.365,239.365,0,0,0,87.344,425.892,239.365,239.365,0,0,0,425.857,87.379ZM256.6,464C142.259,464,49.236,370.977,49.236,256.636S142.259,49.271,256.6,49.271s207.365,93.023,207.365,207.365S370.942,464,256.6,464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil asterisk circle';
-->
