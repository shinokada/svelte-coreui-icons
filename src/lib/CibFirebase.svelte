<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib firebase';
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
    d="M5.188 20.896l3.151-20.281c0.104-0.688 1.031-0.844 1.354-0.229l3.391 6.359zM27.578 25.818l-3-18.667c-0.099-0.578-0.807-0.802-1.224-0.391l-18.932 19.057 10.474 5.906c0.656 0.37 1.458 0.37 2.115 0zM19.068 9.531l-2.427-4.646c-0.271-0.516-1.010-0.516-1.281 0l-10.651 19.094z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib firebase';
-->
