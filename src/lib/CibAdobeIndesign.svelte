<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib adobe indesign';
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
    d="M0 0.401v31.197h32v-31.197zM1.333 1.735h29.333v28.531h-29.333zM11.697 22.027c0 0.129-0.020 0.171-0.171 0.171h-2.053c-0.129 0-0.171-0.061-0.171-0.171v-14.319c0-0.129 0.061-0.177 0.171-0.177h2.073c0.109 0 0.151 0.048 0.151 0.157zM14.063 16.86c0-3.188 2.099-5.672 5.468-5.672 0.281 0 0.439 0 0.704 0.015v-3.536c0-0.088 0.068-0.136 0.129-0.136h2.167c0.115 0 0.136 0.048 0.136 0.115v12.475c0 0.369 0 0.833 0.068 1.339 0 0.088-0.027 0.109-0.115 0.156-1.147 0.547-2.36 0.792-3.5 0.792-2.953 0-5.063-1.828-5.063-5.547zM20.235 13.364c-0.199-0.088-0.464-0.135-0.792-0.135-1.713 0-2.916 1.317-2.916 3.52 0 2.511 1.223 3.521 2.765 3.521 0.328 0 0.681-0.041 0.943-0.156z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib adobe indesign';
-->
