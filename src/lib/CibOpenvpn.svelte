<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib openvpn';
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
  viewBox="0 0 32 32"
>
  <path
    d="M16 0.484c-8.818 0-16 7.109-16 15.865 0 5.813 3.146 10.87 7.859 13.604l1.026-6.766c-1.568-1.724-2.448-3.964-2.458-6.292 0-5.198 4.24-9.438 9.505-9.438s9.5 4.24 9.5 9.438c0 2.458-0.953 4.646-2.458 6.359l1.026 6.771c4.786-2.734 8-7.87 8-13.677 0-8.755-7.182-15.865-16-15.865zM15.932 11.359c-2.797-0.005-5.068 2.266-5.063 5.063-0.010 2.109 1.302 4 3.281 4.719l-1.979 10.391h7.521l-1.911-10.391c1.844-0.755 3.214-2.531 3.214-4.719 0.005-2.797-2.266-5.068-5.063-5.063z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib openvpn';
-->
