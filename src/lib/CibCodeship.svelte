<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib codeship';
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
    d="M16.073 0c-1.297 0-3.199 0.541-3.199 1.016v2.823c1.063-0.219 2.141-0.344 3.224-0.365 1.084 0.027 2.167 0.141 3.229 0.349v-2.792c0-0.489-1.964-1.031-3.255-1.031zM16.099 5.047c-2.724 0-6.755 1.12-6.755 1.593v3.459c2.052-1.427 4.307-2.536 6.692-3.296 0.016-0.016 3.735 1 6.948 3.328l0.005 0.005v-3.496c0-0.495-4.167-1.593-6.891-1.593zM16.136 8.495c-1.021 0.26-2.021 0.74-2.953 1.183-2.032 0.953-3.912 2.197-5.589 3.687 1.803 1.839 2.88 4.147 3.543 6.292l0.047 0.151 0.052 0.053-0.068-0.053c-0.016-0.015-2.161-2.213-5.297-2.213-1.656 0-3.572 0.609-5.588 2.443 0.192 0.693 0.427 1.344 0.703 2v0.021l0.032 0.063c2.672 6.099 8.937 10.073 15.593 9.875 6.527-0.197 12.464-4.416 14.839-10.479 0.131-0.328 0.245-0.672 0.364-1-2.249-1.672-5.776-3.756-7.135-3.489v-0.005c-1.037 0.197-2.251 1.687-3.808 3.176 0.625-2.213 1.745-4.681 3.776-6.817-0.525-0.479-1.083-0.937-1.656-1.359v-0.016c-2.031-1.511-4.396-2.808-6.853-3.516zM16.12 9.688l0.817 4.067-0.197 3.563-0.589 5.276v0.027l-0.068-0.011c-0.009 0-0.020-0.011-0.031-0.011v-0.036l-0.656-5.265-0.161-3.537zM17.317 22.792l0.032 0.005c-0.063 0.020-0.131 0.047-0.193 0.072 0.052-0.031 0.109-0.047 0.161-0.077z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib codeship';
-->
