<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil baby';
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
    d="M425.39,200.035A184.3,184.3,0,0,0,290.812,91.289L317.568,48.48,290.432,31.52,255.127,88.008A184.046,184.046,0,0,0,86.61,200.035a71.978,71.978,0,0,0,0,143.93,184.071,184.071,0,0,0,338.78,0,71.978,71.978,0,0,0,0-143.93Zm27.152,99.975a39.77,39.77,0,0,1-27.76,11.961l-20.725.394-8.113,19.074a152.066,152.066,0,0,1-279.887,0l-8.114-19.074-20.725-.394a39.978,39.978,0,0,1,0-79.942l20.725-.394,8.114-19.074a152.067,152.067,0,0,1,279.887,0l8.113,19.074,20.725.394a39.974,39.974,0,0,1,27.76,67.981Z"
  />
  <rect width="40" height="40" x="168" y="232" fill="var(--ci-primary-color, {color})" />
  <rect width="40" height="40" x="304" y="232" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M256,384a80,80,0,0,0,80-80H176A80,80,0,0,0,256,384Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil baby';
-->
