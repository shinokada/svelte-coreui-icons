<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib nintendo 3ds';
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
    d="M23.536 22.172c0 0.525 0.428 0.953 0.948 0.953 0.527 0 0.953-0.428 0.953-0.953 0-0.521-0.427-0.948-0.953-0.948-0.52 0-0.948 0.427-0.948 0.948zM10.937 27.823h10.099c0.401 0 0.699-0.296 0.724-0.697v-6.901c-0.025-0.375-0.348-0.697-0.724-0.677h-10.099c-0.391 0-0.713 0.313-0.724 0.704v6.875c0 0.401 0.323 0.697 0.724 0.697zM28.339 23.125c0.536 0 0.973-0.437 0.973-0.975 0-0.864-1.047-1.301-1.661-0.687-0.615 0.609-0.181 1.661 0.688 1.661zM26.416 23.099c-0.541-0.020-0.989 0.412-0.989 0.953 0 0.536 0.448 0.969 0.989 0.948 1.22-0.047 1.22-1.855 0-1.901zM25.464 20.251c0 0.525 0.427 0.947 0.948 0.947 0.525 0 0.952-0.421 0.952-0.947 0-0.527-0.427-0.948-0.952-0.948-0.521 0-0.948 0.421-0.948 0.948zM3.385 22.151c0 1.213 0.984 2.199 2.203 2.199 1.215 0 2.199-0.985 2.199-2.199 0-2.937-4.401-2.937-4.401 0zM28.364 0h-24.728c-2.005-0.005-3.641 1.62-3.652 3.625v24.724c0.027 2.025 1.652 3.651 3.652 3.651h24.703c2.011 0 3.651-1.615 3.677-3.625v-24.724c-0.027-2.025-1.652-3.651-3.652-3.651zM30.912 28.375c-0.005 1.407-1.141 2.543-2.548 2.547h-24.728c-1.407-0.004-2.543-1.14-2.548-2.547v-11.276h29.824zM30.912 15.448h-29.824v-11.797c0.005-1.405 1.141-2.547 2.548-2.552h24.728c1.396 0 2.548 1.152 2.548 2.552v11.797zM23.213 4.151h-14.5c-0.401 0-0.729 0.349-0.729 0.751v7.296c0 0.401 0.303 0.756 0.729 0.756h14.5c0.407-0.005 0.735-0.344 0.724-0.756v-7.323c0-0.401-0.323-0.724-0.724-0.724z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib nintendo 3ds';
-->
