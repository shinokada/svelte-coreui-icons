<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib periscope';
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
    d="M16.183 32c2.5 0 12.416-11.251 12.416-18.797 0-7.219-5.64-13.203-12.416-13.203-7.141 0-12.781 5.984-12.781 13.203 0 7.543 9.916 18.797 12.781 18.797zM14.188 5.131c0.645-0.161 1.323-0.251 2.031-0.251 4 0 7.437 3.401 7.437 7.823 0 3.98-3.437 7.38-7.459 7.38-4.457 0-7.9-3.4-7.9-7.38 0-1.864 0.599-3.52 1.64-4.843v0.041c0 1.661 1.339 2.979 3 2.979s3.063-1.359 3.063-3.020c0-1.224-0.745-2.276-1.812-2.735z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib periscope';
-->
