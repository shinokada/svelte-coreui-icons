<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib radiopublic';
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
    d="M18.584 5.432c4.343-0.38 8.681-2.635 13.025-0.719v26.521c-5.989-2.651-11.979 2.651-17.969 0v-4.661c-4.416 0.359-8.833 2.645-13.249 0.719v-26.521c6.068 2.651 12.131-2.651 18.193 0zM21.891 19.828c0.525-0.115 1.047-0.235 1.568-0.349 2.312-0.505 3.235-1.869 3.235-4.015v-3.464c0-2.115-0.595-3.453-3.407-2.849-1.568 0.344-3.136 0.724-4.703 0.865v17.287c1.104-0.095 2.203-0.313 3.307-0.553zM21.891 17.016v-4.88l0.625-0.141c0.771-0.172 0.844 0.208 0.844 0.839v2.88c0 0.537-0.073 0.995-0.844 1.161zM8.708 22.812v-7.391l0.699-0.151c0.672-0.145 0.864 0.021 0.869 0.833v5.047c0 0.767 0.125 1.109 0.297 1.261 1.104-0.229 2.208-0.433 3.307-0.505v-0.115c-0.12-0.199-0.271-0.511-0.271-1.261v-5.88c0-1.281-0.896-1.771-1.416-1.864 0.619-0.365 1.463-1.068 1.463-2.505v-2.765c0-1.855-1.016-2.833-3.031-2.407-1.745 0.364-3.485 0.808-5.224 0.959v17.292c1.099-0.095 2.203-0.308 3.307-0.548zM8.708 12.568v-4.371c0.251-0.057 0.495-0.109 0.745-0.167 0.672-0.145 0.823 0.057 0.823 0.803v2.344c0 0.812-0.249 1.099-0.921 1.244z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib radiopublic';
-->
