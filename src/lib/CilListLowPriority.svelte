<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil list low priority';
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
  <rect width="240" height="32" x="256" y="56" fill="var(--ci-primary-color, {color})" />
  <rect width="240" height="32" x="256" y="162.667" fill="var(--ci-primary-color, {color})" />
  <rect width="240" height="32" x="256" y="269.333" fill="var(--ci-primary-color, {color})" />
  <rect width="168" height="32" x="328" y="376" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M161.231,408H167.2v68.783L302,393,167.2,306.772V376h-5.965C98.8,376,48,311.4,48,232S98.8,88,161.231,88H216V56H161.231C121.783,56,84.91,74.755,57.4,108.81,30.7,141.866,16,185.616,16,232s14.7,90.134,41.4,123.19C84.91,389.245,121.783,408,161.231,408ZM199.2,365.228,242,392.609,199.2,419.217Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil list low priority';
-->
