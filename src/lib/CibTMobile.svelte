<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib t mobile';
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
    d="M18.297 1.536h0.771c4.989 0 7.312 2.609 8.281 9.568l1.547-0.068-0.208-11.036h-25.376l-0.249 11.036 1.484 0.068c0.26-2.609 0.568-4.016 1.24-5.416 1.183-2.609 3.651-4.152 6.692-4.152h1.079v24.016c0 2.541-0.151 3.344-0.771 3.948-0.516 0.469-1.541 0.667-2.729 0.667h-1.183v1.604h14.104v-1.604h-1.187c-1.177 0-2.213-0.197-2.724-0.667-0.615-0.604-0.771-1.407-0.771-3.948v-24.016zM2.667 14.5h6.505v6.495h-6.505zM22.579 14.5h6.504v6.495h-6.504z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib t mobile';
-->
