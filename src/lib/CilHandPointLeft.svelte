<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil hand point left';
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
    d="M397.784,472h-159.7a24.072,24.072,0,0,1-23.124-17.576L179.838,328H68a52,52,0,0,1,0-104H248V199.582l-22.6-18.494A90.41,90.41,0,0,1,214.607,51.58a24,24,0,0,1,34.149-2.006L496,272.891V417.059L410.132,468.58A24,24,0,0,1,397.784,472ZM244.161,440H395.568L464,398.941V287.109L233.75,79.141a58.437,58.437,0,0,0,11.91,77.18l34.34,28.1V256H68a20,20,0,0,0,0,40H204.162ZM227.307,73.321l.023.02Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil hand point left';
-->
