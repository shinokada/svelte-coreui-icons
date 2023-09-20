<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil image broken';
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
    points="40 472 472 472 472 312 440 312 440 440 72 440 72 312 40 312 40 472"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M40,265.755l49.373,25.437,53.82-46.829,56.159,50.528L256,247.052l56.648,47.839,56.159-50.528,53.82,46.829L472,265.755V40H40ZM72,72H440V246.244l-12.738,6.564-58.809-51.171-56.471,50.806L256,205.167l-55.982,47.276-56.471-50.806L84.738,252.808,72,246.244Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil image broken';
-->
