<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib wire';
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
    d="M32 19.303c0.011 5.443-4.396 9.864-9.839 9.88h-0.021c-2.181-0.021-4.296-0.776-6-2.141-4.359 3.391-10.645 2.609-14.036-1.749-1.333-1.719-2.073-3.819-2.104-5.989v-15.543h1.88v15.543c-0.005 4.416 3.579 8 7.995 8.004 1.724 0 3.401-0.557 4.787-1.588-1.552-1.781-2.411-4.057-2.421-6.416v-12.719c0-2.079 1.681-3.761 3.76-3.761s3.76 1.683 3.76 3.761v12.719c0.005 2.353-0.833 4.629-2.359 6.416 3.563 2.609 8.572 1.828 11.177-1.74 0.995-1.353 1.531-2.995 1.541-4.676v-15.543h1.88zM17.88 6.579c0-1.037-0.844-1.881-1.88-1.881s-1.88 0.844-1.88 1.881v12.724c0.005 1.88 0.667 3.697 1.88 5.135 1.208-1.437 1.875-3.255 1.88-5.135z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib wire';
-->
