<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib hipchat';
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
    d="M26.312 25.407c0 0 0.141-0.095 0.36-0.261 3.276-2.536 5.328-6.208 5.328-10.291 0-7.62-7.161-13.808-15.995-13.808s-16.005 6.188-16.005 13.808c0 7.619 7.161 13.807 15.995 13.807 1.131 0 2.26-0.099 3.369-0.307l0.349-0.057c2.245 1.452 5.516 2.651 8.38 2.651 0.891 0 1.308-0.729 0.74-1.469-0.864-1.063-2.057-2.76-2.521-4.072zM24.364 19.375c-0.952 1.423-3.911 3.849-8.337 3.849h-0.063c-4.437 0-7.391-2.437-8.339-3.849-0.188-0.219-0.319-0.484-0.365-0.765-0.025-0.359 0.24-0.672 0.6-0.703 0.009-0.005 0.015-0.005 0.025-0.005 0.156 0.011 0.308 0.057 0.437 0.151 2.167 1.765 4.875 2.735 7.672 2.74 2.808 0.031 5.532-0.943 7.683-2.745 0.115-0.104 0.26-0.161 0.416-0.161 0.355 0 0.636 0.281 0.647 0.631-0.043 0.312-0.167 0.609-0.36 0.859z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib hipchat';
-->
