<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil wifi signal 4';
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
    d="M503.785,124.254a432.019,432.019,0,0,0-495.57,0L8,124.4v27.437L237.778,480h36.444L504,151.841V124.4ZM403.327,106.166,213.968,390.2,189.892,355.82,362.877,92.583A395.92,395.92,0,0,1,403.327,106.166ZM286.4,79.278a400.017,400.017,0,0,1,43.232,5.631l-159.49,242.7-26.536-37.9ZM123.963,261.664l-22.8-32.563,97.97-146.955A402.727,402.727,0,0,1,248.457,78.2ZM154.714,91.085,81.461,200.965l-41.6-59.418A398.09,398.09,0,0,1,154.714,91.085ZM256,450.232,233.669,418.34,432.984,119.368a401.8,401.8,0,0,1,39.16,22.179Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil wifi signal 4';
-->
