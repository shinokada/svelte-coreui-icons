<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib blackberry';
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
    d="M10.375 7.306c0 1.463-1.025 3.069-4.531 3.069h-4.381l1.313-5.55h4.238c2.631 0 3.363 1.456 3.363 2.481zM18.262 4.825h-4.238l-1.169 5.55h4.381c3.363 0 4.381-1.606 4.381-3.069 0.006-1.025-0.725-2.481-3.356-2.481zM5.55 13.006h-4.238l-1.313 5.55h4.381c3.506 0 4.531-1.462 4.531-3.069 0-1.019-0.731-2.481-3.363-2.481zM16.806 13.006h-4.237l-1.169 5.55h4.381c3.363 0 4.381-1.462 4.381-3.069 0-1.019-0.731-2.481-3.356-2.481zM28.637 9.644h-4.238l-1.169 5.55h4.381c3.363 0 4.381-1.463 4.381-3.069 0.006-1.019-0.725-2.481-3.356-2.481zM26.887 18.262h-4.238l-1.169 5.55h4.381c3.506 0 4.381-1.462 4.381-3.069 0-1.019-0.725-2.481-3.356-2.481zM15.050 21.625h-4.238l-1.169 5.55h4.381c3.506 0 4.381-1.606 4.381-3.069 0.006-1.019-0.725-2.481-3.356-2.481z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib blackberry';
-->
