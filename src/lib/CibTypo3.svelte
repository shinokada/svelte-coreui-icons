<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib typo3';
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
    d="M24.104 22.052c-0.474 0.141-0.849 0.193-1.349 0.193-4.063 0-10.031-14.203-10.031-18.932 0-1.74 0.417-2.318 0.995-2.818-4.974 0.583-10.943 2.406-12.849 4.729-0.417 0.578-0.667 1.49-0.667 2.651 0 7.38 7.875 24.125 13.432 24.125 2.573 0 6.906-4.224 10.469-9.948zM21.51 0c5.141 0 10.286 0.828 10.286 3.729 0 5.891-3.734 13.021-5.641 13.021-3.401 0-7.625-9.453-7.625-14.177 0-2.161 0.828-2.573 2.979-2.573z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib typo3';
-->
