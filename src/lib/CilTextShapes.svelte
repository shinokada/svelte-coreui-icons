<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil text shapes';
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
  viewBox="0 0 512 512"
>
  <path
    fill="var(--ci-primary-color, {color})"
    d="M231.359,147,150.438,352h45.155l15.593-39.5h89.628L316.407,352h45.155L280.641,147Zm-3.594,123.5L256,198.967,284.235,270.5Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M384,56H128V16H16V128H56V384H16V496H128V456H384v40H496V384H456V128h40V16H384ZM48,96V48H96V96ZM96,464H48V416H96Zm288-40H128V384H88V128h40V88H384v40h40V384H384Zm80-8v48H416V416ZM416,48h48V96H416Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil text shapes';
-->
