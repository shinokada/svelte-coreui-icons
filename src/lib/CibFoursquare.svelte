<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib foursquare';
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
    d="M23.635 4.62l-0.714 3.734c-0.083 0.401-0.594 0.828-1.068 0.828h-6.641c-0.75 0-1.286 0.521-1.286 1.26v0.818c0 0.76 0.542 1.281 1.292 1.281h5.641c0.526 0 1.047 0.583 0.927 1.141l-0.714 3.677c-0.068 0.323-0.417 0.844-1.047 0.844h-4.609c-0.839 0-1.089 0.12-1.651 0.802-0.563 0.698-5.609 6.755-5.609 6.755-0.047 0.063-0.099 0.042-0.099-0.021v-21.177c0-0.479 0.417-1.042 1.036-1.042h13.698c0.5 0 0.974 0.474 0.844 1.094zM24.24 19.26c0.193-0.771 2.328-11.714 3.042-15.182zM24.646 0h-17.068c-2.354 0-3.047 1.771-3.047 2.885v27.12c0 1.255 0.672 1.724 1.052 1.875 0.38 0.156 1.427 0.281 2.057-0.438 0 0 8.057-9.354 8.193-9.49 0.219-0.208 0.219-0.208 0.422-0.208h5.219c2.198 0 2.542-1.563 2.781-2.484 0.198-0.755 2.339-11.698 3.036-15.177 0.542-2.646-0.141-4.083-2.641-4.083z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib foursquare';
-->
