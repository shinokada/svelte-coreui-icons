<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil bank';
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
    d="M247.759,14.358,16,125.946V184H496V125.638ZM464,152H48v-5.946L248.241,49.642,464,146.362Z"
  />
  <rect width="416" height="32" x="48" y="408" fill="var(--ci-primary-color, {color})" />
  <rect width="480" height="32" x="16" y="464" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="160" x="56" y="216" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="160" x="424" y="216" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="160" x="328" y="216" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="160" x="152" y="216" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="160" x="240" y="216" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil bank';
-->
