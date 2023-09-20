<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil user female';
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
    d="M403.6,343.656l-72.823-47.334L344.043,272h23.428a48,48,0,0,0,44.119-66.908L361.581,90.57a112.029,112.029,0,0,0-211.162,0L100.41,205.092A48,48,0,0,0,144.529,272h23.428l13.266,24.322L108.4,343.656A79.725,79.725,0,0,0,72,410.732V496H440V410.732A79.727,79.727,0,0,0,403.6,343.656ZM408,464H104V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479L186.953,240H144.529a16,16,0,0,1-14.72-22.27l50.172-114.9.448-1.143a80.029,80.029,0,0,1,151.142,0l.2.58L382.191,217.73A16,16,0,0,1,367.471,240H325.047L288.5,307.007l97.661,63.479h0A47.836,47.836,0,0,1,408,410.732Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil user female';
-->
