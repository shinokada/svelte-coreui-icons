<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib chromecast';
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
    d="M27.989 4h-23.989c-1.475 0-2.67 1.195-2.67 2.67v3.995h2.67v-3.995h23.989v18.66h-9.324v2.67h9.335c0.708 0 1.387-0.281 1.888-0.782s0.782-1.18 0.782-1.888v-18.66c0-0.708-0.281-1.387-0.782-1.888s-1.18-0.782-1.888-0.782zM1.33 23.974v3.995h3.994c0-1.060-0.421-2.076-1.17-2.825s-1.765-1.17-2.825-1.17zM1.33 18.644v2.669c1.768-0 3.463 0.702 4.713 1.952s1.952 2.946 1.952 4.714v0.021h2.67c0.006-5.149-4.163-9.328-9.313-9.335h-0.021zM1.33 13.314v2.67c6.625-0.006 12 5.359 12.005 11.984v0.031h2.67c-0.029-8.091-6.584-14.642-14.675-14.665z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib chromecast';
-->
