<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil diamond';
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
    d="M408.563,48H103.438L16,179.156v24.786L199.421,480H312.579L496,203.942V179.156ZM391.438,80l63.407,95.111H347.739L317.808,80Zm-163.7,0h56.524l29.93,95.111H197.808ZM120.563,80h73.629l-29.931,95.111H57.155Zm96.016,368L56.525,207.111H163.318L219.813,448Zm36.1,0L196.187,207.111H315.813L259.318,448Zm42.739,0h-3.234l56.5-240.889H455.475Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil diamond';
-->
