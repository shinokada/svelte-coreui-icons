<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil flip to back';
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
    d="M64,496H400V464H64a16.019,16.019,0,0,1-16-16V120H16V448A48.055,48.055,0,0,0,64,496Z"
  />
  <rect width="32" height="32" x="464" y="368" fill="var(--ci-primary-color, {color})" />
  <rect width="29.091" height="32" x="173.091" y="368" fill="var(--ci-primary-color, {color})" />
  <rect width="29.091" height="32" x="405.818" y="368" fill="var(--ci-primary-color, {color})" />
  <rect width="29.091" height="32" x="231.272" y="368" fill="var(--ci-primary-color, {color})" />
  <rect width="29.091" height="32" x="289.455" y="368" fill="var(--ci-primary-color, {color})" />
  <rect width="29.091" height="32" x="347.637" y="368" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="112" y="368" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="29.091" x="112" y="135.272" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="29.091" x="112" y="77.091" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="29.091" x="112" y="309.818" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="29.091" x="112" y="251.637" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="29.091" x="112" y="193.455" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="112" y="16" fill="var(--ci-primary-color, {color})" />
  <rect width="29.091" height="32" x="289.454" y="16" fill="var(--ci-primary-color, {color})" />
  <rect width="29.091" height="32" x="231.272" y="16" fill="var(--ci-primary-color, {color})" />
  <rect width="29.091" height="32" x="405.818" y="16" fill="var(--ci-primary-color, {color})" />
  <rect width="29.091" height="32" x="173.091" y="16" fill="var(--ci-primary-color, {color})" />
  <rect width="29.091" height="32" x="347.637" y="16" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="464" y="16" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="29.091" x="464" y="309.818" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="29.091" x="464" y="77.091" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="29.091" x="464" y="193.454" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="29.091" x="464" y="135.272" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="29.091" x="464" y="251.637" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil flip to back';
-->
