<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil walk';
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
  <circle cx="309.912" cy="82.088" r="34.088" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M322,143.462l-60.585-20.64L183.8,151.048A24.073,24.073,0,0,0,168,173.6V232h32V179.207l48.811-17.749L158.622,440h33.613l50.082-155.811,7.871,2.568L288,356.079V440h32V354.04a24.068,24.068,0,0,0-2.931-11.493l-37.56-68.861,28.949-88.715,19.27,34.684A24.011,24.011,0,0,0,348.707,232H400V200H353.414Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil walk';
-->
