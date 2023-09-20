<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil blur';
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
    d="M87.371,161.022A71.371,71.371,0,1,0,16,89.652,71.45,71.45,0,0,0,87.371,161.022Zm0-110.741A39.371,39.371,0,1,1,48,89.652,39.415,39.415,0,0,1,87.371,50.281Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M274.311,164.974a59.468,59.468,0,1,0-59.468-59.467A59.534,59.534,0,0,0,274.311,164.974Zm0-86.935a27.468,27.468,0,1,1-27.468,27.468A27.5,27.5,0,0,1,274.311,78.039Z"
  />
  <circle cx="435.516" cy="115.386" r="29.637" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M87.371,328.511A71.371,71.371,0,1,0,16,257.141,71.45,71.45,0,0,0,87.371,328.511Zm0-110.741A39.371,39.371,0,1,1,48,257.141,39.415,39.415,0,0,1,87.371,217.77Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M274.311,316.608a59.468,59.468,0,1,0-59.468-59.467A59.534,59.534,0,0,0,274.311,316.608Zm0-86.935a27.468,27.468,0,1,1-27.468,27.468A27.5,27.5,0,0,1,274.311,229.673Z"
  />
  <circle cx="435.516" cy="257.141" r="29.637" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M87.371,496A71.371,71.371,0,1,0,16,424.629,71.451,71.451,0,0,0,87.371,496Zm0-110.742A39.371,39.371,0,1,1,48,424.629,39.415,39.415,0,0,1,87.371,385.258Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M274.311,468.242a59.468,59.468,0,1,0-59.468-59.468A59.534,59.534,0,0,0,274.311,468.242Zm0-86.935a27.468,27.468,0,1,1-27.468,27.467A27.5,27.5,0,0,1,274.311,381.307Z"
  />
  <circle cx="435.516" cy="398.895" r="29.637" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil blur';
-->
