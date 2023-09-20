<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil hand point up';
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
  viewBox="0 0 512 512"
>
  <path
    fill="var(--ci-primary-color, {color})"
    d="M417.059,497.692H272.891L49.574,250.448A24,24,0,0,1,51.581,216.3a90.409,90.409,0,0,1,129.507,10.789l18.494,22.6H224v-180a52,52,0,0,1,104,0V181.531l126.423,35.118A24.071,24.071,0,0,1,472,239.773v159.7a24,24,0,0,1-3.421,12.349Zm-129.95-32H398.941L440,397.26V245.854l-144-40V69.692a20,20,0,0,0-40,0v212H184.418l-28.1-34.34a58.437,58.437,0,0,0-77.18-11.91Zm158.718-218.22.033.009Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil hand point up';
-->
