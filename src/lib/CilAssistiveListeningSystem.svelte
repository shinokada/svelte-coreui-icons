<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil assistive listening system';
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
    d="M277.139,85.414l-8.428,31.021A154.494,154.494,0,0,1,394.266,236.391l31.921-3.6A186.588,186.588,0,0,0,277.139,85.414Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M422.061,89.939A250.681,250.681,0,0,0,294.6,21.146l-8.425,31.005c88.461,17.4,158.108,87.873,174.267,176.767l31.9-3.6A250.6,250.6,0,0,0,422.061,89.939Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M233.106,148.753q-1.576-.021-3.146,0A124.083,124.083,0,0,0,107.022,272.83h32.237a92.091,92.091,0,0,1,91.062-92.085q1.05-.009,2.1,0c49.729.69,90.451,41.722,90.774,91.465a91.233,91.233,0,0,1-28.62,67.331,24.021,24.021,0,0,0-7.408,17.333v50.686A56.5,56.5,0,0,1,230.736,464H222.1v32h8.869a88.534,88.534,0,0,0,88.434-88.435V360.247a124.615,124.615,0,0,0,36.027-88.24A124.438,124.438,0,0,0,233.106,148.753Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M283.141,272.83a52.03,52.03,0,1,0-104.059,0h32a20.03,20.03,0,1,1,40.059,0Z"
  />
  <rect width="32" height="32" x="216" y="304" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="112" y="408" fill="var(--ci-primary-color, {color})" />
  <rect
    width="31.999"
    height="124.451"
    x="162.963"
    y="310.812"
    fill="var(--ci-primary-color, {color})"
    transform="rotate(-45 178.963 373.037)"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil assistive listening system';
-->
