<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib buffer';
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
    d="M31.714 24.318c0.38 0.193 0.38 0.359 0 0.5l-15.146 6.964c-0.38 0.193-0.76 0.193-1.135 0l-15.146-6.964c-0.38-0.141-0.38-0.307 0-0.5l3.625-1.641c0.38-0.188 0.76-0.188 1.135 0l10.385 4.766c0.38 0.188 0.76 0.188 1.141 0l10.38-4.766c0.375-0.188 0.755-0.188 1.135 0zM31.714 15.714c0.38 0.193 0.38 0.38 0 0.568l-15.146 6.974c-0.38 0.135-0.76 0.135-1.135 0l-15.146-6.974c-0.38-0.193-0.38-0.38 0-0.568l3.625-1.635c0.38-0.193 0.76-0.193 1.135 0l10.385 4.76c0.38 0.188 0.76 0.188 1.141 0l10.38-4.76c0.375-0.193 0.755-0.193 1.135 0l3.625 1.63zM0.286 7.682c-0.38-0.193-0.38-0.359 0-0.5l15.146-6.969c0.375-0.188 0.76-0.188 1.135 0l15.146 6.974c0.38 0.141 0.38 0.307 0 0.5l-15.146 6.964c-0.38 0.193-0.76 0.193-1.135 0z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib buffer';
-->
