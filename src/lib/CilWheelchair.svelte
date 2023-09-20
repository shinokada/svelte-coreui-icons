<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil wheelchair';
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
  <circle cx="221.912" cy="66.088" r="34.088" fill="var(--ci-primary-color, {color})" />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M460.12,360.478l-47.943,11.985L393,282.971A24.126,24.126,0,0,0,369.533,264H280.828l-6.462-56H384V176H270.674l-4.134-35.826a24,24,0,0,0-26.593-21.091l-39.736,4.585L220.1,296h142.97l24.758,115.537,80.057-20.015Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M224,448a120,120,0,0,1-45.248-231.135l-3.779-32.75C115.143,204.558,72,261.334,72,328c0,83.813,68.187,152,152,152a152.06,152.06,0,0,0,130.044-73.378L344,360C328,408,282.6,448,224,448Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil wheelchair';
-->
