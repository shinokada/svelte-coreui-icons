<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib wpengine';
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
    d="M10.802 32h10.396v-7.802l-2.599-2.401h-5.198l-2.599 2.401zM24.198 10.802l-2.401 2.599v5.198l2.401 2.599h7.802v-10.396zM21.198 0h-10.396v7.802l2.599 2.401h5.198l2.599-2.401zM32 32v-7.802l-2.401-2.401h-7.802v10.203zM2.401 0l-2.401 2.401v7.797h10.198v-10.198zM21.802 0v7.802l2.396 2.396h7.802v-10.198zM16 17.401c-0.802 0-1.401-0.599-1.401-1.401s0.599-1.401 1.401-1.401c0.802 0 1.401 0.599 1.401 1.401s-0.599 1.401-1.401 1.401zM10.198 24.198l-2.396-2.396h-7.802v10.198h7.802l2.401-2.401v-5.401zM10.198 10.802h-10.198v10.396h7.802l2.401-2.599v-7.797z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib wpengine';
-->
