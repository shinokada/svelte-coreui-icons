<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib player me';
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
    d="M15.974 0c-6.594 0-11.943 5.349-11.943 11.943v0.484c0.344 8.677 9.411 19.573 9.411 19.573v-14.396c-2.182-0.995-3.677-3.156-3.677-5.667 0.005-5.063 5.729-8 9.839-5.047 4.109 2.948 3.161 9.313-1.635 10.932l-0.042 0.016v5.901c5.729-0.948 10.042-5.87 10.042-11.792 0-6.599-5.349-11.948-11.948-11.948z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib player me';
-->
