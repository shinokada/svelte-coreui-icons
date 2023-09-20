<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil dialpad';
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
    d="M121,16a48,48,0,1,0,48,48A48.054,48.054,0,0,0,121,16Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,121,80Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M249,16a48,48,0,1,0,48,48A48.054,48.054,0,0,0,249,16Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,249,80Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M377,112a48,48,0,1,0-48-48A48.054,48.054,0,0,0,377,112Zm0-64a16,16,0,1,1-16,16A16.019,16.019,0,0,1,377,48Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M121,144a48,48,0,1,0,48,48A48.054,48.054,0,0,0,121,144Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,121,208Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M249,144a48,48,0,1,0,48,48A48.054,48.054,0,0,0,249,144Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,249,208Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M377,144a48,48,0,1,0,48,48A48.054,48.054,0,0,0,377,144Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,377,208Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M121,272a48,48,0,1,0,48,48A48.054,48.054,0,0,0,121,272Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,121,336Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M249,272a48,48,0,1,0,48,48A48.054,48.054,0,0,0,249,272Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,249,336Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M377,272a48,48,0,1,0,48,48A48.054,48.054,0,0,0,377,272Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,377,336Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M249,400a48,48,0,1,0,48,48A48.054,48.054,0,0,0,249,400Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,249,464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil dialpad';
-->
