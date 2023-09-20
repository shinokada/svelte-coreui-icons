<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil smoke';
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
  <path fill="var(--ci-primary-color, {color})" d="M16,240V360H360V240H16Zm312,88H48V272H328Z" />
  <rect width="32" height="120" x="384" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="120" x="440" y="240" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M385.428,173.3a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L385.377,48H348.8l-1.82,1.3,18.207,25.49a31.807,31.807,0,0,1-1.736,39.265,64.1,64.1,0,0,0-4.649,76.993L364.77,200h38.46Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M457.428,173.3a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L457.377,48H420.8l-1.82,1.3,18.207,25.49a31.807,31.807,0,0,1-1.736,39.265,64.1,64.1,0,0,0-4.649,76.993L436.77,200h38.46Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil smoke';
-->
