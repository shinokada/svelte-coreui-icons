<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib liberapay';
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
    d="M3.093 0c-1.708 0-3.093 1.385-3.093 3.093v25.813c0 1.708 1.385 3.093 3.093 3.093h25.813c1.708 0 3.093-1.385 3.093-3.093v-25.813c0-1.708-1.385-3.093-3.093-3.093zM15.369 5.307l-3.025 12.543c-0.052 0.233-0.089 0.473-0.099 0.719-0.011 0.197 0.031 0.396 0.119 0.572 0.105 0.183 0.261 0.324 0.448 0.401 0.209 0.104 0.505 0.172 0.881 0.199l-0.652 2.676c-1.031 0-1.844-0.129-2.427-0.4-0.588-0.271-1.011-0.636-1.265-1.099-0.261-0.496-0.385-1.043-0.371-1.6 0.005-0.604 0.095-1.244 0.251-1.927l2.765-11.563zM20.573 10.489c0.812 0 1.509 0.125 2.099 0.371 0.588 0.244 1.068 0.583 1.448 1.015 0.375 0.428 0.656 0.928 0.839 1.5 0.181 0.573 0.271 1.188 0.271 1.839 0 1.057-0.172 2.027-0.521 2.907-0.328 0.849-0.823 1.62-1.448 2.276-0.629 0.645-1.385 1.151-2.224 1.489-0.859 0.355-1.801 0.531-2.817 0.531-0.489 0-0.984-0.041-1.479-0.129l-0.98 3.943h-3.224l3.615-15.063c0.579-0.177 1.245-0.333 1.989-0.469 0.803-0.14 1.615-0.213 2.433-0.208zM20.156 13.213c-0.437-0.005-0.875 0.041-1.307 0.131l-1.521 6.333c0.245 0.063 0.547 0.088 0.912 0.088 0.567 0 1.083-0.104 1.547-0.317 0.453-0.203 0.859-0.505 1.187-0.88 0.324-0.375 0.579-0.828 0.761-1.36 0.187-0.568 0.281-1.156 0.271-1.755 0-0.625-0.136-1.151-0.412-1.589-0.276-0.432-0.755-0.651-1.437-0.651z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib liberapay';
-->
