<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib campaign monitor';
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
    d="M31.781 5.693c-0.385-0.553-1.145-0.688-1.699-0.303l-29.864 20.916c0.219 0.313 0.584 0.521 0.995 0.521h29.573c0.672 0 1.213-0.547 1.213-1.219v-19.235c-0.005-0.235-0.079-0.468-0.219-0.681zM1.917 5.391c-0.553-0.385-1.313-0.251-1.699 0.303-0.14 0.208-0.213 0.443-0.219 0.681v19.265l14.219-11.651z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib campaign monitor';
-->
