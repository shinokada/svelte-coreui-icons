<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil garage';
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
    d="M448,255.454h-.511L407.067,164.5A48.044,48.044,0,0,0,363.2,136H148.8a48.043,48.043,0,0,0-43.863,28.5L64.511,255.454H64a32.036,32.036,0,0,0-32,32v112a32.036,32.036,0,0,0,32,32V472a24.028,24.028,0,0,0,24,24h56a24.028,24.028,0,0,0,24-24V431.454H344V472a24.028,24.028,0,0,0,24,24h56a24.028,24.028,0,0,0,24-24V431.454a32.036,32.036,0,0,0,32-32v-112A32.036,32.036,0,0,0,448,255.454ZM134.175,177.5A16.013,16.013,0,0,1,148.8,168H363.2a16.014,16.014,0,0,1,14.621,9.5l34.646,77.953H99.529ZM136,464H96V431.454h40Zm280,0H376V431.454h40Zm32-64.546H64v-112H448Z"
  />
  <rect width="80" height="32" x="96" y="328" fill="var(--ci-primary-color, {color})" />
  <rect width="80" height="32" x="336" y="328" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="256 14.758 16 111.121 16 145.604 256 49.242 496 145.604 496 111.121 256 14.758"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil garage';
-->
