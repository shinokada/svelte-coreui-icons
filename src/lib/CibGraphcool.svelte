<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib graphcool';
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
    d="M28.182 10.573c-1.552-0.875-3.51 0.266-3.823 0.464l-6.714 3.807c-0.995-0.786-2.406-0.755-3.359 0.083-0.953 0.833-1.177 2.224-0.526 3.318 0.646 1.089 1.979 1.557 3.167 1.115s1.885-1.672 1.667-2.917l6.74-3.828c0.438-0.276 1.464-0.693 1.938-0.427 0.344 0.198 0.542 0.844 0.557 1.802h-0.010v8.401c0 0.786-0.417 1.51-1.094 1.901l-9.63 5.563c-0.682 0.391-1.516 0.391-2.193 0l-9.63-5.563c-0.682-0.391-1.099-1.115-1.099-1.901v-11.12c0-0.786 0.417-1.51 1.099-1.901l8.714-5.026c0.828 0.948 2.219 1.172 3.307 0.531 1.083-0.641 1.563-1.969 1.13-3.151-0.432-1.188-1.651-1.896-2.896-1.688s-2.161 1.271-2.188 2.536l-8.99 5.193c-1.255 0.719-2.031 2.057-2.031 3.505v11.115c0 1.453 0.771 2.786 2.026 3.51l9.625 5.563c1.255 0.724 2.797 0.724 4.052 0l9.63-5.563c1.25-0.724 2.021-2.057 2.026-3.505v-8.083h0.005c0.047-1.896-0.464-3.151-1.5-3.734z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib graphcool';
-->
