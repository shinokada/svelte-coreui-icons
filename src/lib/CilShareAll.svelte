<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil share all';
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
    d="M242.918,16.173H200.557v88H152A136.268,136.268,0,0,0,28.025,184.2,114.159,114.159,0,0,0,16,235.506V496.173H68.146l49.606-177.756a85.4,85.4,0,0,1,81.993-62.244h.812v88h41.78l164.29-164.29ZM232.557,308.7V224.173H199.745A117.5,117.5,0,0,0,86.93,309.815L48,449.315V235.506a82.454,82.454,0,0,1,8.785-37.276l.292-.614A104.217,104.217,0,0,1,152,136.173h80.557V51.067L361.373,179.883Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="330.918 15.509 287.509 15.509 451.882 179.883 288.256 343.509 330.337 343.509 494.627 179.219 330.918 15.509"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil share all';
-->
