<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil fax';
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
    d="M487.944,233.654,424,176.815V89.373L350.627,16H152V144H80a24.028,24.028,0,0,0-24,24V472a24.028,24.028,0,0,0,24,24H496V251.593A24.024,24.024,0,0,0,487.944,233.654ZM152,464H88V176h64ZM328,48h9.373L392,102.627V112H328ZM184,48H296v96h96v72H184ZM464,464H184V248H424V219.629l40,35.557Z"
  />
  <rect width="32" height="32" x="232" y="344" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="296" y="344" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="232" y="408" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="296" y="408" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="360" y="344" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="360" y="408" fill="var(--ci-primary-color, {color})" />
  <rect width="160" height="32" x="232" y="280" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil fax';
-->
