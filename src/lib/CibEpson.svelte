<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib epson';
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
    d="M22.156 18.552c-1.375 0-1.906-1.266-1.906-2.552 0-1.302 0.531-2.568 1.906-2.568 1.37 0 1.906 1.266 1.906 2.568 0 1.286-0.536 2.552-1.906 2.552zM22.156 12.146c-2.172 0-3.422 1.625-3.422 3.854s1.25 3.854 3.422 3.854c2.167 0 3.422-1.625 3.422-3.854s-1.255-3.854-3.422-3.854zM0 12.354h5.448v1.297h-3.927v1.609h3.661v1.271h-3.661v1.802h3.927v1.302h-5.448zM8.974 16.146h-1.375v-2.495h1.375c0.943 0 1.578 0.417 1.578 1.255 0 0.828-0.635 1.24-1.578 1.24zM6.083 19.63h1.521v-2.182h1.37c1.844 0 3.083-0.917 3.083-2.542 0-1.635-1.24-2.552-3.083-2.552h-2.891zM27.693 12.354h-1.552v7.276h1.49v-2.953c0-0.797-0.026-1.521-0.057-2.141 0.177 0.359 0.708 1.448 0.943 1.865l1.938 3.234h1.547v-7.281h-1.474v2.88c0 0.797 0.026 1.594 0.057 2.229-0.177-0.37-0.708-1.464-0.958-1.875zM13.786 17.224c0 0.974 0.813 1.359 1.667 1.359 0.563 0 1.495-0.161 1.495-0.917 0-0.797-1.125-0.943-2.203-1.224-1.135-0.307-2.229-0.724-2.229-2.083 0-1.505 1.417-2.214 2.745-2.214 1.536 0 2.943 0.667 2.943 2.365h-1.51c-0.057-0.885-0.734-1.109-1.505-1.109-0.516 0-1.167 0.203-1.167 0.828 0 0.557 0.37 0.646 2.219 1.12 0.526 0.146 2.214 0.474 2.214 2.125 0 1.359-1.068 2.365-3.057 2.365-1.625 0-3.146-0.797-3.13-2.615z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib epson';
-->
