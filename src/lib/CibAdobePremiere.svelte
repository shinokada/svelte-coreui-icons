<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib adobe premiere';
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
    d="M0 0.401v31.198h32v-31.198zM1.333 1.734h29.333v28.531h-29.333zM8.396 7.703c0-0.089 0.021-0.156 0.135-0.156 0.854-0.042 2.109-0.063 3.427-0.063 3.698 0 5.302 2.026 5.302 4.62 0 3.385-2.448 4.839-5.464 4.839-0.505 0-0.682-0.021-1.036-0.021v5.125c0 0.109-0.042 0.151-0.151 0.151h-2.057c-0.115 0-0.156-0.042-0.156-0.151zM10.76 14.786c0.313 0.021 0.552 0.021 1.083 0.021 1.557 0 3.021-0.547 3.021-2.661 0-1.693-1.042-2.552-2.828-2.552-0.526 0-1.031 0.026-1.276 0.047zM19.297 13.578c0-0.156 0-0.552-0.068-1.297 0-0.109 0.016-0.135 0.104-0.177 1.557-0.599 3.208-0.911 4.875-0.922 0.109 0 0.156 0.021 0.156 0.13v1.938c0 0.109-0.036 0.13-0.146 0.13-0.849-0.052-1.703 0.036-2.521 0.266v8.401c0 0.109-0.047 0.151-0.156 0.151h-2.094c-0.109 0-0.151-0.042-0.151-0.151z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib adobe premiere';
-->
