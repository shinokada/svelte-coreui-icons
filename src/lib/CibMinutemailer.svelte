<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib minutemailer';
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
    d="M7.416 3.604l4.605 4.98-3.251 6.395 6.855-1.229 3.12 7.532 13.255-17.38zM6.573 14.385l1.276-1.047-1.647 0.521-0.172-0.24 0.683-0.661-0.891 0.359c-3.407 1.323-5.823 4.62-5.823 8.485 0 2.599 1.093 4.937 2.844 6.593-0.751-1.317-1.183-2.844-1.183-4.475 0-3.817 2.417-7.219 5.755-8.557l0.423-1.020-1 0.437-0.281-0.38zM12.391 11.76l2.131-3.76 12.531-2.932z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib minutemailer';
-->
