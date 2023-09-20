<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib maxcdn';
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
    d="M28.819 27.669h-6.088l3.244-15.169c0.144-0.637 0.056-1.219-0.275-1.606-0.313-0.381-0.856-0.6-1.512-0.6h-3.081l-3.719 17.375h-6.087l3.719-17.375h-5.213l-3.719 17.375h-6.087l3.719-17.375-2.788-5.962h23.256c2.462 0 4.706 1.019 6.144 2.806 1.456 1.788 1.988 4.213 1.475 6.619z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib maxcdn';
-->
