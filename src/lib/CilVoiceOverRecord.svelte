<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil voice over record';
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
    d="M342.322,104.837A100.443,100.443,0,0,1,342.457,231L367.4,251.02a132.373,132.373,0,0,0-.178-166.261Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M432.147,32.4,407.158,52.55a183.6,183.6,0,0,1,.248,230.594l25.03,20.1A216.053,216.053,0,0,0,432.147,32.4Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M347.6,343.656l-72.822-47.334,27.455-50.334A80.23,80.23,0,0,0,312,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L52.4,343.656A79.725,79.725,0,0,0,16,410.732V496H384V410.732A79.725,79.725,0,0,0,347.6,343.656ZM352,464H48V410.732a47.836,47.836,0,0,1,21.841-40.246l97.661-63.48-41.641-76.34A48.146,48.146,0,0,1,120,207.681V128a80,80,0,0,1,160,0v79.681a48.139,48.139,0,0,1-5.861,22.984L232.5,307.007l97.662,63.479A47.838,47.838,0,0,1,352,410.732Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil voice over record';
-->
