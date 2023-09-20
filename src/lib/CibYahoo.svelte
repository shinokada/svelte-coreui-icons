<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib yahoo';
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
    d="M18.011 32c0 0-1.12-0.203-2.021-0.203-0.812 0-2.031 0.203-2.031 0.203l0.255-13.593c-1.891-3.261-7.432-13.193-10.891-18.407 1.74 0.396 2.469 0.369 4.219 0l0.027 0.047c2.203 3.901 5.572 9.339 8.421 14.052 2.813-4.629 7.24-11.859 8.437-14.099 1.36 0.36 2.729 0.344 4.251 0-1.599 2.156-7.423 12.229-10.937 18.407l0.26 13.593z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib yahoo';
-->
