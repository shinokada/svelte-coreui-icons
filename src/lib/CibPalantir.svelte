<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib palantir';
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
    d="M26.865 24l-10.865 4.24-10.865-4.24-1.802 3.125 12.667 4.875 12.667-4.875zM16 0c-6.995 0-12.667 5.672-12.667 12.667s5.672 12.667 12.667 12.667c6.995 0 12.667-5.672 12.667-12.667s-5.672-12.667-12.667-12.667zM16 21.438c-4.839 0-8.755-3.922-8.755-8.755 0-4.839 3.917-8.76 8.755-8.76s8.755 3.922 8.755 8.76c0 4.833-3.917 8.755-8.755 8.755z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib palantir';
-->
