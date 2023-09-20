<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil star half';
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
    d="M135.539,453.9a7.979,7.979,0,0,1-11.51-8.362L144.6,312.2,49.58,216.411a8,8,0,0,1,4.4-13.53L187.15,181.238,256,76.2V17.833L237.237,46.457,168.111,151.912,48.843,171.3a39.847,39.847,0,0,0-31.626,27.122A40.52,40.52,0,0,0,16,203.183v15.276a39.894,39.894,0,0,0,10.862,20.488l83.65,84.327L92.4,440.663a39.979,39.979,0,0,0,57.548,41.812L256,428.977V393.136Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil star half';
-->
