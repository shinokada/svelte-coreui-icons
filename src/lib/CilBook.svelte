<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil book';
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
    d="M101.667,400H464V16H100.667A60.863,60.863,0,0,0,40,76.667V430.25h.011c0,.151-.011.3-.011.453,0,35.4,27.782,65.3,60.667,65.3H464V464H100.667C85.664,464,72,448.129,72,430.7,72,414.06,85.585,400,101.667,400ZM360,48.333V221.149l-48.4-42.49L264,220.9V48.333ZM232,48V264h31.641l48.075-42.659L360.305,264H392V48h40V368H136.08L136,48ZM100.667,48H104l.076,320h-2.413A59.793,59.793,0,0,0,72,375.883V76.917A28.825,28.825,0,0,1,100.667,48Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil book';
-->
