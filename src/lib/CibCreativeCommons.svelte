<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib creative commons';
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
    d="M15.864 13.429l-2.076 1.080c-0.589-1.224-1.577-1.246-1.716-1.246-1.383 0-2.076 0.913-2.076 2.74 0 1.473 0.576 2.74 2.076 2.74 0.905 0 1.541-0.443 1.911-1.329l1.909 0.969c-0.386 0.719-1.606 2.436-4.069 2.436-1.413 0-4.623-0.645-4.623-4.816 0-3.668 2.687-4.816 4.539-4.816 1.92-0.001 3.294 0.747 4.124 2.241zM24.805 13.429l-2.049 1.080c-0.594-1.236-1.608-1.246-1.744-1.246-1.384 0-2.076 0.913-2.076 2.74 0 1.472 0.577 2.74 2.076 2.74 0.903 0 1.541-0.443 1.909-1.329l1.938 0.969c-0.131 0.234-1.337 2.436-4.068 2.436-1.418 0-4.622-0.617-4.622-4.816 0-3.667 2.686-4.816 4.539-4.816 1.919-0.001 3.286 0.747 4.097 2.241zM15.972 0.503c-8.926 0-15.472 7.191-15.472 15.5 0 8.656 7.1 15.5 15.472 15.5 8.121 0 15.528-6.304 15.528-15.5 0-8.617-6.664-15.5-15.528-15.5zM16.027 28.679c-7.034 0-12.731-5.815-12.731-12.676 0-6.589 5.339-12.704 12.732-12.704 7.033 0 12.676 5.591 12.676 12.704-0 7.606-6.23 12.676-12.678 12.676z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib creative commons';
-->
