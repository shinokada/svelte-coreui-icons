<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib adobe dreamweaver';
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
    d="M0 0.401v31.197h32v-31.197zM1.333 1.735h29.333v28.531h-29.333zM4.167 7.745c0-0.109 0.021-0.157 0.156-0.177 0.505-0.021 1.959-0.063 3.464-0.063 4.464 0 6.687 2.88 6.687 7.104 0 5.875-3.853 7.651-6.823 7.651-1.12 0-2.749-0.020-3.344-0.041-0.088 0-0.129-0.068-0.129-0.177v-14.296zM6.568 20.104c0.369 0.027 0.703 0.047 1.12 0.047 2.463 0 4.291-1.739 4.312-5.473 0.027-3.656-1.864-5.063-4.213-5.063-0.464 0-0.839 0.025-1.213 0.052v10.448zM23.484 22.197c-0.156 0-0.197-0.057-0.219-0.187-0.661-3.672-1.213-6.271-1.453-8.079h-0.020c-0.287 1.636-0.819 4.344-1.699 8.104-0.041 0.136-0.083 0.172-0.192 0.172h-2.156c-0.157 0-0.199-0.020-0.24-0.156l-2.36-10.505c-0.020-0.088 0.027-0.177 0.157-0.177h2.156c0.088 0 0.156 0.032 0.177 0.12 0.833 4.729 1.187 7.177 1.317 8.147h0.088c0.156-1.147 0.615-3.527 1.604-8.105 0.048-0.129 0.048-0.167 0.177-0.167h2.265c0.109 0 0.131 0.057 0.157 0.167 0.771 4.333 1.276 7.068 1.405 8.167h0.068c0.213-1.405 0.505-3.307 1.443-8.192 0.027-0.089 0.047-0.141 0.156-0.141h2.027c0.088 0 0.156 0.048 0.115 0.157l-2.62 10.525c-0.021 0.109-0.041 0.151-0.193 0.151z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib adobe dreamweaver';
-->
