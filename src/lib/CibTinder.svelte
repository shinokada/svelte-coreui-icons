<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib tinder';
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
    d="M12.421 12.599c0.063 0.099 0.167 0.161 0.281 0.161 0.084 0 0.157-0.025 0.215-0.072l0.020-0.016c0.521-0.437 0.984-0.88 1.427-1.36 4.276-4.64 1.781-10.343 1.761-10.395-0.12-0.281-0.043-0.615 0.197-0.792 0.261-0.183 0.584-0.161 0.823 0.041 14.5 13.484 10.657 23.755 10.381 24.448-1.163 4.188-5.781 7.219-11.261 7.375-0.183 0.011-0.323 0.011-0.484 0.011-6.469 0-11.969-3.984-11.969-9.079v-0.077c0-7.063 6.391-14.032 6.677-14.323 0.183-0.204 0.464-0.261 0.704-0.141 0.239 0.099 0.395 0.339 0.385 0.599-0.057 1.381 0.224 2.584 0.843 3.6z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib tinder';
-->
