<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib sourcegraph';
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
    d="M12.453 0.005c-0.214 0.005-0.432 0.036-0.646 0.089-1.807 0.411-2.875 2.219-2.464 4.031l1.87 6.729-6.724-2.208c-1.724-0.573-3.615 0.411-4.193 2.141-0.573 1.724 0.411 3.615 2.135 4.193l7.807 2.557-5.417 6.078c-0.526 0.62-0.818 1.406-0.828 2.219 0.010 1.813 1.479 3.281 3.292 3.286 0.906 0 1.807-0.411 2.469-1.151l4.75-5.302 1.911 6.865c0.385 1.453 1.703 2.464 3.203 2.469h0.005c0.245 0 0.573-0.083 0.823-0.161 1.76-0.51 2.786-2.344 2.297-4.115l-1.839-6.688 6.609 2.167c0.411 0.083 0.74 0.161 1.068 0.161 1.484 0 2.719-0.901 3.125-2.302 0.578-1.724-0.411-3.615-2.135-4.193l-7.641-2.505 5.422-6.047c1.229-1.401 1.151-3.453-0.25-4.688-1.396-1.234-3.453-1.151-4.688 0.245l-4.76 5.344-1.901-6.906c-0.432-1.438-1.807-2.375-3.302-2.307z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib sourcegraph';
-->
