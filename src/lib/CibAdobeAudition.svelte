<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib adobe audition';
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
    d="M0 0.401v31.197h32v-31.197zM1.333 1.735h29.333v28.531h-29.333zM8.88 18.401l-1.031 3.817c-0.021 0.104-0.063 0.183-0.193 0.183h-1.911c-0.131 0-0.152-0.041-0.131-0.193l3.692-12.853c0.095-0.36 0.136-0.724 0.131-1.095 0-0.083 0.041-0.124 0.104-0.124h2.729c0.084 0 0.131 0.020 0.151 0.124l4.141 13.969c0.021 0.109 0 0.172-0.104 0.172h-2.152c-0.093 0-0.171-0.068-0.187-0.161l-1.079-3.839zM12.505 16.265c-0.365-1.437-1.224-4.572-1.541-6.093h-0.027c-0.276 1.521-0.964 4.079-1.5 6.093zM25.864 20.303c0 0.145 0.021 0.599 0.068 1.328 0 0.083-0.011 0.129-0.093 0.151-1.271 0.541-2.636 0.839-4.016 0.88-1.953 0-3.823-0.749-3.823-3.755v-6.871c0-0.104 0.041-0.172 0.151-0.172h2.1c0.109 0 0.151 0.068 0.151 0.172v6.589c0 1.265 0.552 1.953 1.885 1.953 0.448 0.005 0.896-0.079 1.312-0.235v-8.308c0-0.104 0.041-0.172 0.151-0.172h1.964c0.131 0 0.151 0.068 0.151 0.172z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib adobe audition';
-->
