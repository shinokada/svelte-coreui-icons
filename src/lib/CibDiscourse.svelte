<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib discourse';
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
    d="M16.135 0c8.75 0 15.865 7.313 15.865 15.995s-7.104 15.99-15.865 15.99l-16.135 0.016v-16.281c0-8.677 7.375-15.719 16.135-15.719zM16.292 6.083c-3.458-0.005-6.661 1.802-8.448 4.76-1.776 2.943-1.849 6.609-0.198 9.625l-1.781 5.677 6.396-1.432c3.656 1.635 7.953 0.901 10.844-1.854 2.896-2.734 3.818-6.969 2.318-10.661-1.51-3.703-5.12-6.12-9.12-6.115z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib discourse';
-->
