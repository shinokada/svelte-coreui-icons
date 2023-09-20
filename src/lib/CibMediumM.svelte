<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib medium m';
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
    d="M4.469 8.894c0.038-0.369-0.106-0.738-0.381-0.988l-2.819-3.4v-0.506h8.762l6.775 14.856 5.956-14.856h8.356v0.506l-2.412 2.313c-0.206 0.156-0.313 0.419-0.269 0.675v17c-0.044 0.256 0.063 0.519 0.269 0.675l2.356 2.313v0.506h-11.856v-0.506l2.444-2.369c0.238-0.238 0.238-0.313 0.238-0.675v-13.738l-6.794 17.244h-0.919l-7.9-17.244v11.556c-0.069 0.487 0.094 0.975 0.438 1.325l3.175 3.85v0.506h-9v-0.5l3.175-3.856c0.337-0.35 0.494-0.844 0.406-1.325z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib medium m';
-->
