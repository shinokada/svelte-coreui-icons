<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib glassdoor';
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
    d="M22.859 27.427h-18.286c0 2.526 2.047 4.573 4.568 4.573h13.714c2.526 0 4.573-2.047 4.573-4.573v-18.771c0-0.094-0.073-0.167-0.167-0.167h-4.24c-0.089 0-0.161 0.073-0.161 0.167v18.776zM22.859 0c2.521 0 4.568 2.047 4.568 4.573h-18.281v18.771c0 0.089-0.078 0.167-0.167 0.167h-4.24c-0.094 0-0.167-0.078-0.167-0.167v-18.771c0-2.526 2.047-4.573 4.568-4.573h13.719z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib glassdoor';
-->
