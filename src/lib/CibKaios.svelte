<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib kaios';
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
    d="M5.958 0c-2.068-0.021-3.766 1.635-3.786 3.708v24.573c0.010 2.078 1.708 3.75 3.786 3.719 2.078 0.036 3.786-1.63 3.802-3.708v-24.583c-0.036-2.068-1.734-3.724-3.802-3.708zM18.495 11.385c-1.193-1.667-3.51-2.063-5.188-0.88-1.682 1.13-2.094 3.427-0.906 5.068l10.667 14.865c1.198 1.656 3.495 2.047 5.172 0.88 1.646-1.094 2.083-3.318 0.99-4.958l-0.083-0.12-10.641-14.854zM23.359 9.813c2.729 0.021 4.958-2.167 4.99-4.891-0.031-2.729-2.26-4.917-4.99-4.896-2.729-0.031-4.969 2.161-5 4.896 0.031 2.729 2.271 4.922 5 4.891z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib kaios';
-->
