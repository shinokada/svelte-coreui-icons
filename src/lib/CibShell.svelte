<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib shell';
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
    d="M16 1.151c-8.88 0-16 7.182-16 16.156 0 1.328 0.052 1.833 0.328 3.104l4.88 3.615 0.76 6.021h8.135l0.438 0.302c0.5 0.349 0.938 0.5 1.443 0.5 0.469 0 0.974-0.135 1.365-0.417l0.521-0.385h8.125l0.75-6.021 4.927-3.615c0.276-1.271 0.328-1.776 0.328-3.104 0-8.969-7.12-16.156-16-16.156zM17.328 4.161c1.198 0 2.37 0.297 3.349 0.865l-3.286 16.729 4.563-16.078c1.411 0.479 2.479 1.25 3.344 2.417l0.031 0.047-6.536 14.151 7.427-12.948 0.047 0.036c1.010 0.943 1.661 2.089 1.99 3.531l-8.26 10.224 8.583-8.667 0.010 0.026c0.339 0.75 0.557 1.813 0.557 2.661 0 0.677-0.031 0.948-0.219 1.667l-4.74 3.469-0.62 4.948h-5.969l-0.688 0.526c-0.266 0.208-0.646 0.354-0.911 0.354s-0.646-0.146-0.911-0.354l-0.688-0.526h-5.974l-0.589-4.813-4.839-3.557c-0.146-0.578-0.214-1.104-0.214-1.677 0-0.964 0.214-1.99 0.568-2.74l0.016-0.031 8.604 8.734-8.307-10.328c0.333-1.417 1.167-2.786 2.188-3.62l7.391 13.036-6.604-14.109c0.74-1.089 1.932-1.943 3.391-2.438l4.568 16.094-3.458-16.703 0.073-0.042c1.083-0.599 2.13-0.875 3.276-0.875 0.26 0 0.38 0.005 0.703 0.042l0.781 17.401 0.615-17.417c0.297-0.031 0.411-0.036 0.74-0.036z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib shell';
-->
