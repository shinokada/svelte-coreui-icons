<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil camera control';
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
    d="M336,256a80,80,0,1,0-80,80A80.091,80.091,0,0,0,336,256Zm-128,0a48,48,0,1,1,48,48A48.055,48.055,0,0,1,208,256Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M160,397.988,245.307,496h21.386L352,397.988V368H160ZM307.825,400,256,459.544,204.175,400Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M245.307,16,160,114.012V144H352V114.012L266.693,16Zm-41.132,96L256,52.456,307.825,112Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M16,245.307v21.386L114.013,352H144V160H114.013Zm96,62.519L52.455,256,112,204.174Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M397.987,160H368V352h29.987L496,266.693V245.307ZM400,307.826V204.174L459.545,256Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil camera control';
-->
