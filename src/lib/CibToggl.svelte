<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib toggl';
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
    d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM14.88 6.229h2.24v11.145h-2.24zM16 24.208c-4.317-0.005-7.817-3.511-7.817-7.828 0-3.516 2.353-6.604 5.749-7.536v2.281c-2.172 0.848-3.593 2.943-3.593 5.276 0 3.129 2.536 5.661 5.667 5.661 3.125-0.005 5.656-2.541 5.656-5.667 0-2.328-1.427-4.417-3.593-5.265v-2.292c3.401 0.932 5.755 4.025 5.755 7.547 0 4.323-3.505 7.817-7.823 7.817z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib toggl';
-->
