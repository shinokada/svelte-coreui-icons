<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib elastic stack';
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
  viewBox="0 0 32 32"
>
  <path
    d="M0.094 3.266c0.016-1.745 1.427-3.156 3.172-3.172h25.469c1.745 0.016 3.156 1.427 3.172 3.172v6.375h-31.813zM0.094 22.359h15.104v9.547h-11.932c-1.719 0-3.13-1.37-3.172-3.094zM16.802 22.359h15.104v6.375c0 1.703-1.469 3.172-3.172 3.172h-11.932zM0.094 11.229h31.813v9.542h-31.813z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib elastic stack';
-->
