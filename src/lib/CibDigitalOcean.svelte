<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib digital ocean';
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
    d="M5.438 30.113h4.606v-4.6h-4.606zM1.587 21.663v3.85h3.85v-3.85zM30.725 11.056c-1.438-4.637-5.15-8.331-9.788-9.787-10.631-3.319-20.438 4.587-20.438 14.725h5.988c0-6.362 6.312-11.281 13.006-8.856 2.481 0.894 4.469 2.881 5.363 5.356 2.444 6.688-2.481 12.988-8.837 13v0.019h-0.019v5.988c10.163 0 18.050-9.8 14.725-20.444zM16.019 25.494v-5.956h-5.975v5.975h5.956v-0.019z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib digital ocean';
-->
