<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil wifi signal 1';
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
    d="M237.778,480h36.444L504,151.842V124.4l-.215-.15a432.019,432.019,0,0,0-495.57,0L8,124.4v27.438ZM178.867,340.075a158.219,158.219,0,0,1,154.266,0L256,450.232ZM256,78.128a397.867,397.867,0,0,1,216.144,63.419L351.561,313.758a190.142,190.142,0,0,0-191.122,0L39.856,141.547A397.867,397.867,0,0,1,256,78.128Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil wifi signal 1';
-->
