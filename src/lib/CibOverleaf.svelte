<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib overleaf';
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
    d="M9.817 8.036c-4.541 2.709-7.401 7.532-7.593 12.813 0.005 4.14 2.303 7.943 5.973 9.869 3.667 1.927 8.1 1.656 11.516-0.692 3.412-2.349 5.24-6.401 4.745-10.516-0.489-4.115-3.224-7.615-7.095-9.095-1.26-0.509-2.604-0.765-3.957-0.749-2.417 1.631-4.355 3.869-5.615 6.495 1.609-1.921 4.088-2.885 6.572-2.557 2.491 0.328 4.631 1.901 5.688 4.177 1.057 2.271 0.875 4.927-0.473 7.041-1.355 2.109-3.693 3.38-6.199 3.375-2.151 0-4.192-0.937-5.588-2.572-1.808-2.016-2.589-4.756-2.115-7.423 1.432-8.557 11.687-13.489 19.281-15.4-3.516 1.692-6.901 3.64-10.125 5.833 9.177 3.541 10.651-4.183 14.943-7.641-4.271-1.672-19.937-2.287-19.959 7.047z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib overleaf';
-->
