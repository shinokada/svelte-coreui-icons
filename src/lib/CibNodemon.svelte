<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib nodemon';
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
    d="M29.771 10.469l-0.953-0.531c1.469-2.094 2.344-5.234 1.245-9.938 0 0-2.474 6.703-7.453 6.484l-5.823-3.24c-0.219-0.125-0.469-0.193-0.719-0.203h-0.135c-0.25 0.010-0.495 0.078-0.714 0.203l-5.828 3.24c-4.979 0.224-7.453-6.484-7.453-6.484-1.099 4.703-0.224 7.844 1.245 9.938l-0.953 0.531c-0.484 0.26-0.786 0.766-0.786 1.318l0.026 19.453c0 0.271 0.146 0.521 0.396 0.656 0.24 0.141 0.536 0.141 0.776 0l7.719-4.271c0.49-0.281 0.786-0.776 0.786-1.318v-9.089c0-0.542 0.297-1.047 0.786-1.313l3.286-1.828c0.24-0.135 0.51-0.208 0.786-0.208 0.266 0 0.542 0.068 0.781 0.208l3.286 1.828c0.484 0.266 0.781 0.771 0.781 1.313v9.089c0 0.542 0.302 1.036 0.786 1.318l7.719 4.271c0.245 0.141 0.542 0.141 0.786 0 0.24-0.13 0.385-0.385 0.385-0.656l0.026-19.453c0-0.552-0.302-1.057-0.786-1.318z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib nodemon';
-->
