<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib line';
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
    d="M25.817 13.151c0.469 0 0.844 0.38 0.844 0.839 0 0.464-0.375 0.844-0.844 0.844h-2.339v1.5h2.339c0.469 0 0.844 0.375 0.844 0.839 0 0.459-0.375 0.839-0.844 0.839h-3.177c-0.463 0-0.837-0.38-0.837-0.839v-6.36c0-0.463 0.375-0.843 0.837-0.843h3.183c0.464 0 0.839 0.38 0.839 0.843 0 0.464-0.375 0.839-0.844 0.839h-2.339v1.5zM20.683 17.172c0 0.359-0.235 0.683-0.579 0.797-0.083 0.025-0.177 0.041-0.265 0.041-0.281 0-0.521-0.125-0.683-0.333l-3.255-4.427v3.921c0 0.459-0.371 0.839-0.839 0.839-0.464 0-0.839-0.38-0.839-0.839v-6.36c0-0.359 0.235-0.681 0.573-0.796 0.083-0.032 0.181-0.043 0.26-0.043 0.26 0 0.5 0.141 0.661 0.339l3.281 4.437v-3.937c0-0.463 0.375-0.843 0.839-0.843s0.844 0.38 0.844 0.843zM13.027 17.172c0 0.459-0.376 0.839-0.844 0.839-0.459 0-0.833-0.38-0.833-0.839v-6.36c0-0.463 0.375-0.843 0.839-0.843 0.463 0 0.839 0.38 0.839 0.843zM9.74 18.011h-3.183c-0.464 0-0.844-0.38-0.844-0.839v-6.36c0-0.463 0.38-0.843 0.844-0.843s0.839 0.38 0.839 0.843v5.521h2.344c0.463 0 0.839 0.375 0.839 0.839 0 0.459-0.381 0.839-0.839 0.839zM32 13.749c0-7.161-7.183-12.989-16-12.989s-16 5.828-16 12.989c0 6.417 5.693 11.792 13.38 12.813 0.521 0.109 1.229 0.344 1.412 0.787 0.161 0.4 0.104 1.020 0.052 1.443l-0.219 1.359c-0.063 0.401-0.323 1.579 1.396 0.86 1.724-0.719 9.224-5.437 12.583-9.303 2.297-2.515 3.396-5.099 3.396-7.959z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib line';
-->
