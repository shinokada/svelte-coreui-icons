<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil gift';
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
    d="M472,128H371.833A71.962,71.962,0,0,0,256,42.815,71.962,71.962,0,0,0,140.167,128H40a24.028,24.028,0,0,0-24,24V473.556C16,485.932,26.767,496,40,496H472c13.233,0,24-10.068,24-22.444V152A24.028,24.028,0,0,0,472,128ZM312,48a40,40,0,0,1,0,80H272V88A40.045,40.045,0,0,1,312,48ZM160,88a40,40,0,0,1,80,0v40H200A40.045,40.045,0,0,1,160,88ZM48,464V256H192V464Zm176,0V256h64V464Zm240,0H320V256H464ZM48,224V160H464v64Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil gift';
-->
