<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil zoom in';
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
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="208 96 176 96 176 176 96 176 96 208 176 208 176 288 208 288 208 208 288 208 288 176 208 176 208 96"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M479.6,400.4l-81.084-81.084-62.368-25.767A175.008,175.008,0,0,0,368,192.687c0-97.047-78.953-176-176-176S16,95.64,16,192.687s78.953,176,176,176a175.028,175.028,0,0,0,101.619-32.378l25.7,62.2L400.4,479.6a56,56,0,0,0,79.2-79.2ZM48,192.687c0-79.4,64.6-144,144-144s144,64.6,144,144-64.6,144-144,144S48,272.088,48,192.687ZM456.971,456.971a24.029,24.029,0,0,1-33.942,0L346.457,380.4l-23.894-57.835L380.4,346.457l76.573,76.572A24.029,24.029,0,0,1,456.971,456.971Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil zoom in';
-->
