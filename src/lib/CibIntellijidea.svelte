<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib intellijidea';
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
    d="M0 0v32h32v-32zM4.964 4.145h6.667v2.448h-1.855v8.371h1.855v2.443h-6.667v-2.443h1.927v-8.371h-1.927zM19.703 4.145h2.964v8.667c0 0.819-0.073 1.485-0.297 2.079-0.224 0.588-0.52 1.036-0.963 1.479-0.371 0.371-0.885 0.745-1.48 0.891-0.615 0.245-1.265 0.371-1.927 0.371-1.036 0-1.927-0.224-2.593-0.595-0.647-0.364-1.219-0.843-1.704-1.405l1.855-2.073c0.369 0.443 0.74 0.74 1.109 0.964 0.369 0.219 0.812 0.369 1.26 0.369 0.521 0 0.959-0.151 1.333-0.521 0.292-0.369 0.443-0.891 0.443-1.703zM2.964 26h12v2h-12z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib intellijidea';
-->
