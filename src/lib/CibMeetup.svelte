<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib meetup';
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
    d="M31.969 26.984c-0.401-2.572-5.163-0.593-5.459-3.411-0.417-4 5.531-12.615 5.063-15.964-0.417-3.005-2.453-3.64-4.219-3.677-1.715-0.025-2.167 0.245-2.745 0.584-0.339 0.192-0.817 0.577-1.484-0.057-0.443-0.423-0.745-0.713-1.208-1.089-0.24-0.192-0.62-0.432-1.261-0.525-0.629-0.099-1.463 0-1.984 0.219-0.532 0.229-0.937 0.625-1.369 1-0.433 0.375-1.532 1.599-2.548 1.145-0.448-0.192-1.948-0.943-3.031-1.405-2.084-0.901-5.093 0.557-6.183 2.489-1.615 2.864-4.796 14.135-5.287 15.62-1.077 3.333 1.381 6.052 4.683 5.895 1.401-0.067 2.333-0.572 3.213-2.181 0.511-0.928 5.308-13.448 5.667-14.057 0.261-0.432 1.125-1.005 1.855-0.636 0.735 0.38 0.88 1.161 0.771 1.896-0.183 1.193-3.557 8.839-3.693 9.699-0.219 1.473 0.48 2.285 2.011 2.369 1.043 0.052 2.089-0.317 2.912-1.88 0.464-0.871 5.797-11.557 6.265-12.271 0.521-0.781 0.937-1.043 1.475-1.011 0.411 0.020 1.061 0.125 0.9 1.353-0.161 1.209-4.452 9.043-4.9 10.959-0.605 2.573 0.801 5.167 3.124 6.308 1.48 0.728 7.959 1.968 7.433-1.371z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib meetup';
-->
