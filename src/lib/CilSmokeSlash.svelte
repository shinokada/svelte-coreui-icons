<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil smoke slash';
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
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="384 316.118 416 348.118 416 240 384 240 384 316.118"
  />
  <rect width="32" height="120" x="440" y="240" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M363.451,114.055a64.1,64.1,0,0,0-4.649,76.993L364.77,200h38.46l-17.8-26.7a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L385.377,48H348.8l-1.82,1.3,18.208,25.49A31.808,31.808,0,0,1,363.451,114.055Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M435.451,114.055a64.1,64.1,0,0,0-4.649,76.993L436.77,200h38.46l-17.8-26.7a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L457.377,48H420.8l-1.82,1.3,18.208,25.49A31.808,31.808,0,0,1,435.451,114.055Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M262.627,240l-224-224H16V38.627L217.373,240H16V360H337.373l136,136H496V473.373ZM48,328V272H249.373l56,56Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil smoke slash';
-->
