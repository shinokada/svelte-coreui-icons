<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib adobe lightroom classic';
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
    d="M0 0.401v31.197h32v-31.197zM1.333 1.735h29.333v28.531h-29.333zM8.864 22.167c-0.156 0-0.197-0.068-0.197-0.197v-14.324c0-0.115 0.041-0.176 0.156-0.176h2.109c0.115 0 0.136 0.047 0.136 0.161v12.343h5.5c0.109 0 0.14 0.048 0.12 0.157l-0.333 1.891c-0.021 0.109-0.089 0.156-0.199 0.156h-7.292zM18.735 13.531c0-0.161 0-0.552-0.068-1.301 0-0.109 0.027-0.136 0.115-0.177 0.812-0.328 2.74-0.921 4.896-0.921 0.109 0 0.151 0.020 0.151 0.135v1.932c0 0.115-0.041 0.136-0.156 0.136-0.833-0.041-2.084 0.068-2.547 0.265v8.412c0 0.109-0.043 0.151-0.152 0.151h-2.093c-0.109 0-0.151-0.041-0.151-0.151v-8.48z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib adobe lightroom classic';
-->
