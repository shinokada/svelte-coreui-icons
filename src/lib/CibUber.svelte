<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib uber';
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
    d="M15.958 0.010c-8.214-0.005-15.094 6.219-15.911 14.391h11.115v-2.401c0-0.438 0.359-0.797 0.797-0.797h8c0.443 0 0.797 0.359 0.797 0.802v7.995c0 0.438-0.354 0.797-0.797 0.797h-8c-0.443 0-0.797-0.359-0.797-0.797v-2.401h-11.115c0.885 8.792 8.724 15.198 17.51 14.313 8.792-0.88 15.198-8.724 14.313-17.51-0.818-8.172-7.698-14.391-15.911-14.391z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib uber';
-->
