<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib moo';
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
    d="M15.953 32c-3.37 0-6.401-1.474-8.453-4.182-1.479-1.891-2.214-4.104-2.214-6.479 0-0.745 0.078-1.479 0.245-2.141 0.396-2.38 2.12-6.234 5.24-11.568 2.302-3.943 4.182-6.891 4.281-6.891 0.161-0.328 0.411-0.74 0.901-0.74 0.495 0 0.74 0.411 0.984 0.74 0 0 1.974 2.953 4.266 6.891 3.125 5.333 4.844 9.193 5.255 11.573 0.172 0.656 0.255 1.391 0.255 2.13 0 2.38-0.74 4.594-2.198 6.484-2.161 2.63-5.281 4.182-8.563 4.182zM15.953 29.208c2.536 0 4.839-1.146 6.401-3.12 1.063-1.391 1.635-3.115 1.635-4.917 0-0.578-0.078-1.073-0.161-1.641-0.328-1.807-1.724-4.922-4.099-9.109-1.807-3.203-3.365-5.495-3.365-5.495l-0.417-0.578-0.339 0.495c0 0-1.563 2.375-3.359 5.5-2.458 4.198-3.859 7.297-4.099 9.115-0.078 0.578-0.161 1.068-0.161 1.641 0 1.807 0.573 3.448 1.641 4.922 1.479 2.052 3.771 3.198 6.318 3.198z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib moo';
-->
