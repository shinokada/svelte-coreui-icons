<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib yammer';
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
    d="M27.803 8.651c0.651-0.515 0.817-1.448 0.359-2.161-0.401-0.625-1.156-0.88-1.839-0.687l-0.187 0.099c-1.084 0.599-8.407 5.719-7.584 6.296 0.823 0.573 5.817-1.676 9.229-3.552zM27.781 24.057c-3.432-1.875-8.427-4.125-9.251-3.552-0.823 0.577 6.48 5.703 7.563 6.297l0.188 0.099c0.683 0.203 1.421-0.057 1.823-0.688 0.464-0.708 0.281-1.64-0.364-2.156zM30.749 14.672c-0.077-0.021-0.14-0.021-0.219-0.021-1.244 0-10.115 0.964-9.671 1.865 0.443 0.885 5.895 1.323 9.791 1.323 0.803-0.141 1.401-0.88 1.344-1.724-0.063-0.745-0.583-1.344-1.287-1.484zM7.235 22.355c-1 2.869-1.943 4.213-4.109 4.213-0.204 0-0.948-0.037-0.985-0.063-0.703-0.036-1.343 0.421-1.525 1.125-0.219 0.785 0.24 1.604 1.041 1.848 0.563 0.1 1.167 0.12 1.688 0.12 3.973 0 5.296-2.287 6.599-5.635l7.828-19.385c0.281-0.885-0.224-1.808-1.083-2.089-0.865-0.281-1.767 0.183-2.089 1.005l-5.459 14.443h-0.077l-5.74-14.541c-0.359-0.803-1.323-1.203-2.187-0.885-0.881 0.323-1.344 1.307-1.048 2.187l7.235 17.663z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib yammer';
-->
