<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil bike';
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
    d="M116,468A100,100,0,1,0,16,368,100.113,100.113,0,0,0,116,468Zm0-168a68,68,0,1,1-68,68A68.077,68.077,0,0,1,116,300Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M296,368A100,100,0,1,0,396,268,100.113,100.113,0,0,0,296,368Zm100-68a68,68,0,1,1-68,68A68.077,68.077,0,0,1,396,300Z"
  />
  <circle cx="317.912" cy="94.088" r="34.088" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M190.954,266.3,240,314.69V404h32V311.345a24.154,24.154,0,0,0-7.144-17.084l-51.274-50.588,66.453-66.453L338.2,236.771A24.14,24.14,0,0,0,355.369,244H384V212H358.738l-92.487-94.688-.475.464-8.4-8.4-112,112,45.254,45.254Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil bike';
-->
