<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib android alt';
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
    d="M7.6 12.781v7.238c0 0.962-0.756 1.731-1.719 1.731-0.956 0-1.881-0.775-1.881-1.731v-7.238c0-0.944 0.925-1.719 1.881-1.719 0.944 0 1.719 0.775 1.719 1.719zM8.275 22.594c0 1.025 0.825 1.85 1.85 1.85h1.244l0.019 3.819c0 2.306 3.45 2.288 3.45 0v-3.819h2.325v3.819c0 2.294 3.469 2.3 3.469 0v-3.819h1.262c1.012 0 1.837-0.825 1.837-1.85v-11.212h-15.456zM23.775 10.775h-15.569c0-2.675 1.6-5 3.975-6.212l-1.194-2.206c-0.175-0.306 0.269-0.5 0.419-0.238l1.212 2.225c2.181-0.969 4.688-0.919 6.769 0l1.206-2.219c0.156-0.269 0.594-0.069 0.419 0.238l-1.194 2.2c2.356 1.212 3.956 3.538 3.956 6.212zM13.106 7.306c0-0.356-0.287-0.656-0.656-0.656-0.356 0-0.637 0.3-0.637 0.656s0.288 0.656 0.637 0.656c0.369 0 0.656-0.3 0.656-0.656zM20.194 7.306c0-0.356-0.288-0.656-0.638-0.656-0.369 0-0.656 0.3-0.656 0.656s0.288 0.656 0.656 0.656c0.35 0 0.638-0.3 0.638-0.656zM26.119 11.063c-0.944 0-1.719 0.756-1.719 1.719v7.238c0 0.962 0.775 1.731 1.719 1.731 0.963 0 1.881-0.775 1.881-1.731v-7.238c0-0.962-0.925-1.719-1.881-1.719z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib android alt';
-->
