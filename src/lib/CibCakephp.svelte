<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib cakephp';
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
    d="M0 18.5v4.995c0 2.756 7.161 4.989 16 4.989v-4.989c-8.839 0-16-2.24-16-4.989zM28.511 21.609l-12.511-3.109v4.995l12.511 3.109c2.183-0.855 3.489-1.932 3.489-3.109v-4.995c0 1.177-1.307 2.255-3.489 3.109zM16 13.511v4.989c-8.839 0-16-2.235-16-4.989v-5.005c0-2.751 7.161-4.989 16-4.989 8.833 0 16 2.239 16 4.995v5c0 1.177-1.307 2.249-3.489 3.109l-12.511-3.115z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib cakephp';
-->
