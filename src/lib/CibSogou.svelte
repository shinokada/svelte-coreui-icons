<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib sogou';
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
    d="M22.401 30.317l1.317 1.683c2.084-0.901 3.901-2.161 5.401-3.803l-1.26-1.755c-1.48 1.719-3.297 3.036-5.439 3.875zM16 29.599c-7.697 0-13.937-6.161-13.937-13.801 0-7.6 6.24-13.756 13.937-13.756s13.943 6.199 13.943 13.797c0 3.401-1.26 6.521-3.344 8.921l1.261 1.683c2.541-2.803 4.14-6.525 4.14-10.604 0-8.776-7.161-15.839-16-15.839s-16 7.083-16 15.803c0 8.76 7.161 15.837 16 15.837 2.281 0 4.437-0.463 6.401-1.323l-1.281-1.677c-1.599 0.6-3.317 0.959-5.12 0.959zM24 16.86c-3-2.48-7.12-2.797-10.401-4.74-1-0.641-0.197-1.86 0.803-1.901 3.599-0.599 7.161 0.844 10.52 2l0.199-3.536c-4.199-1.521-8.76-2.5-13.199-1.803-1.604 0.401-3.203 0.901-4.337 2.079-1.563 1.604-1.281 4.479 0.515 5.76 2.984 2.344 6.901 2.683 10.161 4.479 1.281 0.521 0.74 2.24-0.52 2.365-3.901 0.74-7.74-0.964-11.1-2.803-0.041 1.36-0.077 2.677-0.077 4 4.255 1.88 9 2.761 13.599 2.037 1.557-0.297 3.156-0.797 4.297-1.937 1.64-1.6 1.484-4.683-0.437-6z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib sogou';
-->
