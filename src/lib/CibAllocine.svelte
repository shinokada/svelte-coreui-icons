<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib allocine';
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
    d="M27.26 28.214l-4.318-27.286c-0.089-0.594-0.641-1.005-1.234-0.917h-0.005l-4.563 0.734c0.703 4.599-6.172 5.688-6.932 1.099l-4.557 0.724c-0.594 0.089-1.005 0.641-0.917 1.234v0.005l4.328 27.276c0.089 0.594 0.641 0.995 1.234 0.901l4.563-0.719c-0.333-1.938 0.984-3.766 2.922-4.073 1.938-0.302 3.75 1.042 4.021 2.984l4.563-0.719c0.589-0.094 0.99-0.646 0.901-1.234v-0.010zM19.693 10.948l-1.641 2.406c-0.146 0.188-0.344 0.328-0.578 0.401-0.677 0.156-1.661-1.286-2.359 2.005-0.698 3.286 0.786 2.38 1.339 2.807 0.182 0.151 0.313 0.354 0.375 0.583l0.526 2.854h-0.016c0.057 0.354-0.13 0.708-0.458 0.859-0.604 0.245-1.557 0.568-2.115 0.448-1.203-0.255-3.12-3.234-2.083-8.094s3.99-6.771 5.193-6.516c0.552 0.12 1.297 0.802 1.755 1.271 0.24 0.271 0.266 0.672 0.063 0.974z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib allocine';
-->
