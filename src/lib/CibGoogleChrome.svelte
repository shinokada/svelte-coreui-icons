<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib google chrome';
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
    d="M21.62 11.588l8.953-2.239c0.943 2.077 1.427 4.333 1.427 6.615 0 8.796-7.24 16.036-16.041 16.036-0.407 0-0.808-0.016-1.209-0.047l6.537-11.131c0.473-0.5 0.875-1.068 1.177-1.692 0.948-2.005 0.927-4.339-0.057-6.328-0.219-0.433-0.485-0.839-0.787-1.215zM17.297 23.021l-2.828 8.905c-8.152-0.801-14.469-7.739-14.469-15.957 0-3.177 0.948-6.287 2.719-8.933l6.443 11.172c0.24 0.719 1.495 3.443 4.089 4.437 1.333 0.505 2.723 0.641 4.047 0.376zM15.964 10.161c-2.672 0.027-5.172 2.057-5.709 4.683-0.38 1.953 0.24 3.968 1.652 5.375 1.62 1.584 4.187 2.104 6.312 1.235 1.875-0.765 3.292-2.568 3.588-4.573 0.36-2.473-1.052-5.109-3.328-6.172-0.785-0.364-1.645-0.552-2.515-0.547zM9.396 13.281l-6.385-6.661c3.020-4.156 7.849-6.62 12.984-6.62 6.084 0 11.661 3.459 14.365 8.901h-13.615c-2.417-0.167-4.385 0.692-5.688 1.937-0.719 0.688-1.287 1.521-1.661 2.443z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib google chrome';
-->
