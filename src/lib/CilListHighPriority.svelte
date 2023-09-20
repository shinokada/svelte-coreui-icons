<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil list high priority';
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
  <rect width="240" height="32" x="256" y="416" fill="var(--ci-primary-color, {color})" />
  <rect width="240" height="32" x="256" y="309.333" fill="var(--ci-primary-color, {color})" />
  <rect width="240" height="32" x="256" y="202.667" fill="var(--ci-primary-color, {color})" />
  <rect width="168" height="32" x="328" y="96" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M302,111,167.2,27.216V96h-5.965C121.783,96,84.91,114.755,57.4,148.81,30.7,181.866,16,225.616,16,272s14.7,90.134,41.4,123.19C84.91,429.245,121.783,448,161.231,448H216V416H161.231C98.8,416,48,351.4,48,272S98.8,128,161.231,128H167.2v69.228ZM199.2,84.784,242,111.391,199.2,138.772Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil list high priority';
-->
