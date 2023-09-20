<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil bullhorn';
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
    d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil bullhorn';
-->
