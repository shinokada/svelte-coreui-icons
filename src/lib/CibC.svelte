<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib c';
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
    d="M22.698 12.286c0 0-0.516-4.391-5.276-4.51-4.76-0.125-7.203 3.292-7.203 8.172s2.703 8.786 7.333 8.786c4.63 0 5.146-4.88 5.146-4.88l8.875 0.484c0 0 0.521 4.411-3.193 7.771-3.714 3.365-8.271 3.911-11.453 3.891-3.188-0.026-7.599 0.047-11.87-3.958-4.266-4-4.99-7.891-4.99-11.714 0-3.818 0.807-8.88 5.885-12.719 3.448-2.604 6.943-3.568 10.443-3.568 14.599 0 15.578 12.333 15.578 12.333z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib c';
-->
