<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil movie';
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
    d="M136,488H495.985V24H16V488H136ZM408,56h55.985V96H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408ZM136,200V56H375.985V240H136Zm0,216V272H375.985V456H136ZM48,56h56V96H48Zm0,72h56v40H48Zm0,72h56v40H48Zm0,72h56v40H48Zm0,72h56v40H48Zm0,72h56v40H48Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil movie';
-->
