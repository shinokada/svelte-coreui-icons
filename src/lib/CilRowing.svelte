<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil rowing';
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
    d="M302.569,106.243A36,36,0,1,0,286.088,76,35.825,35.825,0,0,0,302.569,106.243Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M419.9,396.687,381.412,358.2l-11.375-11.375-74.621-19.515L188.173,216h59.9L288,161.935V279.762L320.079,313.3,352,319.683V131.314H270.833L231.926,184H157.342l-33.82-35.1-23.044,22.2L213.355,288.258,85.694,395.762l.779.925H16v32H248v-32H134.274l101.333-85.334,34.619,35.931,20.617,78.738,59.634,59.633a24,24,0,0,0,33.942,0L429.674,440.4c.034-.033.067-.066.1-.1a38.176,38.176,0,0,1,27.092-11.614H496v-32Zm-52.451,60.685L319.6,409.526l-12.036-45.963,45.979,12.025,47.844,47.844Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil rowing';
-->
