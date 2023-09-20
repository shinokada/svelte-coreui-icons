<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib klout';
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
    d="M0 3.563v19.631h21.563l10.437 5.244v-24.875zM13.104 14.792h-1.563l-3.839 5.405h-4.567l5.249-7.020-4.849-6.761h4.448l3.547 5.177h1.573zM24.312 20.193l-3.839-5.401h-2.624v5.401h-3.641v-13.777h3.647v5.177h2.619l3.548-5.177h4.437l-4.844 6.761 5.249 7.020h-4.552z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib klout';
-->
