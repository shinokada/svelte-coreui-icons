<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil text strike';
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
  <path fill="var(--ci-primary-color, {color})" d="M16,496H496V16H16ZM48,48H464V464H48Z" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M344.766,288H257.025l38.054,25.748a21.894,21.894,0,0,1,9.558,16.187,20.653,20.653,0,0,1-6.058,16.824C294.7,350.584,286.705,357,276.677,357h-104v54h104c21.722,0,42.972-9.165,59.835-25.808a74.638,74.638,0,0,0,21.9-60.218A75.831,75.831,0,0,0,344.766,288Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M215.426,194.653c-12.195-8.251-9.725-20.755-8.677-24.389,1.269-4.4,5.647-14.643,18.964-15.248,6.468-.018,118.281,0,118.281,0l.012-54s-119.176-.006-119.795.015c-32.949,1.1-60.171,22.419-69.351,54.278-7.125,24.726-1.819,49.847,13.481,68.688H80v32H432V224H258.8Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil text strike';
-->
