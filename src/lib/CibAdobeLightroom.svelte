<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib adobe lightroom';
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
    d="M26.333 0.401h-20.667c-3.136 0-5.667 2.531-5.667 5.667v19.864c0 3.136 2.531 5.667 5.667 5.667h20.667c3.136 0 5.667-2.531 5.667-5.667v-19.864c0-3.136-2.531-5.667-5.667-5.667zM30.651 25.412c0.016 2.676-2.151 4.853-4.823 4.853h-19.656c-2.667 0-4.839-2.172-4.839-4.853v-18.824c0-2.681 2.172-4.853 4.839-4.853h19.64c2.672 0 4.839 2.167 4.839 4.839zM8.864 22.172c-0.156 0-0.197-0.068-0.197-0.199v-14.333c0-0.109 0.041-0.171 0.161-0.171h2.104c0.109 0 0.136 0.036 0.136 0.156v12.348h5.495c0.104 0 0.145 0.043 0.12 0.163l-0.333 1.891c-0.032 0.109-0.095 0.161-0.204 0.161h-7.281zM18.864 13.531c0-0.156 0-0.547-0.061-1.291 0-0.104 0.025-0.136 0.104-0.172 0.812-0.333 2.744-0.923 4.905-0.923 0.109 0 0.161 0.027 0.161 0.136v1.916c0 0.109-0.041 0.136-0.161 0.136-0.839-0.041-2.077 0.068-2.547 0.265v8.417c0 0.104-0.036 0.156-0.161 0.156h-2.088c-0.109 0-0.161-0.036-0.161-0.156v-8.485z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib adobe lightroom';
-->
