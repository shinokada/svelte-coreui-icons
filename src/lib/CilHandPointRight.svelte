<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil hand point right';
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
    d="M273.919,472h-159.7a24,24,0,0,1-12.349-3.421L16,417.059V272.891L263.244,49.574a24,24,0,0,1,34.149,2.007A90.409,90.409,0,0,1,286.6,181.088L264,199.582V224H444a52,52,0,0,1,0,104H332.162L297.043,454.423A24.071,24.071,0,0,1,273.919,472ZM116.432,440H267.838l40-144H444a20,20,0,0,0,0-40H232V184.418l34.34-28.1a58.437,58.437,0,0,0,11.91-77.18L48,287.109V398.941ZM284.693,73.321l-.023.02.023-.02Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil hand point right';
-->
