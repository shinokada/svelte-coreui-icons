<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil notes';
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
  <rect width="288" height="32" x="112" y="152" fill="var(--ci-primary-color, {color})" />
  <rect width="288" height="32" x="112" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="152" height="32" x="112" y="328" fill="var(--ci-primary-color, {color})" />
  <path fill="var(--ci-primary-color, {color})" d="M480,48H32V464H480ZM448,432H64V80H448Z" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil notes';
-->
