<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil beach access';
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
    d="M259.431,268.8l140-140-27.785-27.785A208.333,208.333,0,0,0,77.019,395.646L104.8,423.431l132-132L401.372,456h45.256ZM224.333,72a175.182,175.182,0,0,1,124.686,51.646l5.157,5.158-57.058,57.058a477.658,477.658,0,0,0-62.879-53.924C209.023,114.1,184.8,101.609,162.245,94.807a152.909,152.909,0,0,0-17.092-4.129A175.58,175.58,0,0,1,224.333,72ZM104.8,378.176l-5.158-5.157A176.637,176.637,0,0,1,66.678,169.153a153.129,153.129,0,0,0,4.129,17.092c6.8,22.556,19.3,46.778,37.131,71.994a477.658,477.658,0,0,0,53.924,62.879Zm79.7-79.7c-11.857-11.634-32.231-32.977-50.438-58.718-22.872-32.336-46.59-77.9-33.753-115.45,37.421-12.793,82.8,10.736,115.005,33.437,25.864,18.233,47.431,38.815,59.158,50.759Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil beach access';
-->
