<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil airplane mode';
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
    d="M476.757,337.8l13.329-66.646L320,186.111V113.889a105.15,105.15,0,0,0-37.937-81,40.705,40.705,0,0,0-52.126,0,105.15,105.15,0,0,0-37.937,81v72.222L21.914,271.154,35.243,337.8l157.189-20.5,7.736,81.224L128,429.45V496H384V429.45l-72.168-30.929,7.736-81.224ZM352,450.551V464H160V450.551l74.238-31.818L224,311.24V280.908L60.757,302.2l-2.671-13.354L224,205.889v-92a73.235,73.235,0,0,1,26.423-56.413,8.707,8.707,0,0,1,11.154,0A73.235,73.235,0,0,1,288,113.889v92l165.914,82.957L451.243,302.2,288,280.908V311.24L277.762,418.733Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil airplane mode';
-->
