<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib renren';
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
    d="M7.547 12.803v-5.729c-3.208 0.541-5.875 2.76-6.995 5.817-1.115 3.057-0.511 6.473 1.593 8.959 3.167-1.537 5.385-5.005 5.401-9.047zM9.057 18.287c-0.563 2.339-2.251 4.333-4.349 5.661 1.333 0.729 2.828 1.109 4.349 1.109s3.016-0.38 4.349-1.109c-2.1-1.328-3.787-3.328-4.349-5.661zM15.969 10.151c-1.381-1.635-3.292-2.724-5.401-3.077v5.681c0 4.063 2.219 7.552 5.401 9.095-1.385-1.636-2.147-3.709-2.147-5.849 0-2.145 0.761-4.219 2.147-5.849zM15.969 10.151c1.337 1.579 2.208 3.62 2.208 5.849s-0.871 4.271-2.208 5.849c3.171-1.537 5.447-5.005 5.463-9.047v-5.729c-2.125 0.353-4.057 1.443-5.463 3.077zM24.453 12.755c0 4.063 2.224 7.552 5.401 9.095 2.104-2.485 2.708-5.901 1.593-8.959-1.12-3.052-3.787-5.276-6.995-5.817zM22.943 18.287c-0.563 2.339-2.249 4.333-4.349 5.661 1.333 0.729 2.828 1.109 4.349 1.109s3.016-0.38 4.349-1.109c-2.099-1.328-3.781-3.328-4.349-5.661z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib renren';
-->
