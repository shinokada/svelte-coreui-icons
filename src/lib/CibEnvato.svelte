<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib envato';
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
    d="M25.865 0.26c-0.984-0.495-3.625-0.328-6.927 0.828-5.609 3.958-10.229 9.568-10.724 18.813 0 0.323-0.656 0-0.823-0.167-1.484-2.807-2.146-5.943-0.823-10.563 0.328-0.328-0.495-0.823-0.495-0.656-0.333 0.161-1.484 1.479-2.313 2.802-3.797 6.594-1.323 15.349 5.281 18.974 6.594 3.63 15.177 1.318 18.974-5.448 4.458-7.75 0.495-23.094-2.151-24.583z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib envato';
-->
