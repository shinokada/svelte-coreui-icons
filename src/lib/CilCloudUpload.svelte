<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil cloud upload';
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
    points="346.231 284.746 256.039 194.554 165.847 284.746 188.474 307.373 240.039 255.808 240.039 496 272.039 496 272.039 255.808 323.604 307.373 346.231 284.746"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M400,161.453V160c0-79.4-64.6-144-144-144S112,80.6,112,160v2.491A122.285,122.285,0,0,0,49.206,195.2,109.4,109.4,0,0,0,16,273.619c0,31.119,12.788,60.762,36.01,83.469C74.7,379.275,105.338,392,136.07,392H200V360H136.07C89.154,360,48,319.635,48,273.619c0-42.268,35.64-77.916,81.137-81.155L144,191.405V160a112,112,0,0,1,224,0v32.04l15.8.2c46.472.588,80.2,34.813,80.2,81.379C464,322.057,428.346,360,382.83,360H312v32h70.83a109.749,109.749,0,0,0,81.14-35.454C484.625,334.339,496,304.889,496,273.619,496,215.182,455.716,169.392,400,161.453Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil cloud upload';
-->
