<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil blur linear';
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
  <rect width="480" height="32" x="16" y="16" fill="var(--ci-primary-color, {color})" />
  <rect width="480" height="32" x="16" y="464" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M87.371,231.467A71.371,71.371,0,1,0,16,160.1,71.45,71.45,0,0,0,87.371,231.467Zm0-110.741A39.371,39.371,0,1,1,48,160.1,39.415,39.415,0,0,1,87.371,120.726Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M274.311,231.467A59.467,59.467,0,1,0,214.843,172,59.533,59.533,0,0,0,274.311,231.467Zm0-86.934A27.467,27.467,0,1,1,246.843,172,27.5,27.5,0,0,1,274.311,144.533Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M435.516,215.468a29.637,29.637,0,1,0-29.637-29.637A29.637,29.637,0,0,0,435.516,215.468Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M87.371,427.35A71.371,71.371,0,1,0,16,355.979,71.451,71.451,0,0,0,87.371,427.35Zm0-110.742A39.371,39.371,0,1,1,48,355.979,39.415,39.415,0,0,1,87.371,316.608Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M274.311,403.543a59.468,59.468,0,1,0-59.468-59.467A59.534,59.534,0,0,0,274.311,403.543Zm0-86.935a27.468,27.468,0,1,1-27.468,27.468A27.5,27.5,0,0,1,274.311,316.608Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M435.516,359.882a29.637,29.637,0,1,0-29.637-29.637A29.637,29.637,0,0,0,435.516,359.882Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil blur linear';
-->
