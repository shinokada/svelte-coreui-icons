<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib tumblr';
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
    d="M19.417 32c-6.792 0-9.375-5.010-9.375-8.547v-10.458h-3.219v-4.13c4.839-1.75 6.016-6.13 6.276-8.625 0.021-0.172 0.156-0.24 0.234-0.24h4.688v8.151h6.401v4.844h-6.427v9.964c0.021 1.333 0.5 3.161 2.943 3.161h0.12c0.844-0.031 1.984-0.276 2.583-0.563l1.542 4.568c-0.583 0.849-3.203 1.833-5.542 1.87h-0.24z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib tumblr';
-->
