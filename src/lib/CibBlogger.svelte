<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib blogger';
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
    d="M29.303 32h-26.6c-1.505 0-2.703-1.197-2.703-2.697v-26.6c0-1.505 1.197-2.703 2.697-2.703h26.704c1.401 0 2.599 1.197 2.599 2.697v26.605c0 1.5-1.197 2.697-2.697 2.697zM16 5.303h-4c-3.697 0-6.697 3-6.697 6.697v8c0 3.697 3 6.697 6.697 6.697h8c3.697 0 6.697-3 6.697-6.697v-5.303c0-0.796-0.599-1.395-1.4-1.395h-1.297c-0.697 0-1.303-0.605-1.303-1.303 0-3.703-3-6.703-6.697-6.703zM20.099 21.303h-8.099c-0.697 0-1.303-0.605-1.303-1.303s0.605-1.303 1.303-1.303h8.099c0.704 0 1.303 0.6 1.303 1.303s-0.599 1.303-1.303 1.303zM16.697 10.697c0.704 0 1.303 0.605 1.303 1.303s-0.599 1.303-1.303 1.303h-4.796c-0.704 0-1.303-0.605-1.303-1.303s0.599-1.303 1.303-1.303z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib blogger';
-->
