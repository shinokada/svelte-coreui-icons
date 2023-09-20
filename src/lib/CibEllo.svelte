<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib ello';
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
    d="M16 0c-8.828 0-16 7.172-16 16s7.172 16 16 16c8.828 0 16-7.172 16-16s-7.172-16-16-16zM25.281 18.401c-1.068 4.214-4.906 7.198-9.281 7.198s-8.214-2.984-9.281-7.198c-0.104-0.479 0.161-1.016 0.641-1.12 0.479-0.109 1.016 0.156 1.12 0.641 0.906 3.411 4 5.813 7.521 5.813s6.615-2.401 7.521-5.813c0.104-0.484 0.641-0.802 1.12-0.641 0.479 0.104 0.797 0.641 0.641 1.12z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib ello';
-->
