<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib adobe typekit';
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
    d="M0 0v32h32v-32zM1.333 1.369h29.333v29.261h-29.333zM9.552 10.645h-3.692c-0.111 0-0.157-0.047-0.131-0.176l0.26-1.849c0.021-0.109 0.068-0.151 0.177-0.151h9.235c0.129 0 0.177 0.041 0.197 0.171l0.177 1.829c0.021 0.129-0.041 0.176-0.156 0.176h-3.672v12.313c0 0.109-0.041 0.177-0.177 0.177h-2.041c-0.131 0-0.177-0.048-0.177-0.177zM19.625 17l3.364-4.552c0.089-0.109 0.109-0.156 0.219-0.156h2.245c0.131 0 0.172 0.088 0.083 0.197-0.525 0.683-2.943 3.672-3.733 4.641-0.027 0.041-0.027 0.088 0 0.129l4.265 5.699c0.041 0.088 0.020 0.177-0.109 0.177h-2.599c-0.131 0-0.172-0.048-0.22-0.136-1.192-1.615-2.369-3.251-3.515-4.901v4.88c0 0.109-0.027 0.157-0.156 0.157h-2.068c-0.151 0-0.172-0.048-0.172-0.177v-14.36c0-0.068 0.021-0.129 0.151-0.129h2.089c0.088 0 0.156 0.041 0.156 0.151z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib adobe typekit';
-->
