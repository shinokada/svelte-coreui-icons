<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib server fault';
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
    d="M32 24.245v3.036h-6.521v-3.036zM0 24.104h15.339v3.031h-15.339v-3.036zM17.188 24.104h6.521v3.031h-6.521v-3.036zM25.479 19.297h6.521v3.031h-6.521zM0 19.156h15.339v3.031h-15.339zM17.188 19.156h6.521v3.031h-6.521zM25.479 14.693h6.521v3.031h-6.521zM0 14.552h15.339v3.031h-15.339zM17.188 14.552h6.521v3.031h-6.521zM25.479 9.745h6.521v3.036h-6.521zM0 9.609h15.339v3.031h-15.339v-3.042zM17.188 9.609h6.521v3.031h-6.521v-3.042zM25.479 4.865h6.521v3.036h-6.521v-3.042zM0 4.719h15.339v3.036h-15.339zM17.188 4.719h6.521v3.036h-6.521z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib server fault';
-->
