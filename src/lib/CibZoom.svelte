<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib zoom';
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
    d="M6.115 18.172l-0.36-0.016h-3.233l4.312-4.312-0.016-0.36c-0.015-0.577-0.484-1.047-1.063-1.063l-0.359-0.015h-5.391l0.021 0.359c0.041 0.584 0.468 1.027 1.056 1.063l0.36 0.016h3.24l-4.319 4.312 0.016 0.36c0.021 0.577 0.484 1.041 1.063 1.063l0.36 0.015h5.391l-0.016-0.359c-0.047-0.589-0.469-1.021-1.063-1.057zM10.432 12.407h-0.005c-4.791 0.005-4.787 7.187 0 7.187 4.792 0 4.792-7.181 0.005-7.187zM11.953 17.527c-0.833 0.88-2.229 0.895-3.089 0.036-0.859-0.855-0.837-2.251 0.037-3.089 2.036-1.932 4.984 1.016 3.052 3.053zM29.115 12.407c-0.823 0-1.604 0.353-2.151 0.973-0.548-0.62-1.333-0.973-2.157-0.973-0.577 0-1.135 0.172-1.613 0.495-0.276-0.313-0.907-0.495-1.261-0.495v7.187l0.36-0.015c0.599-0.043 1.036-0.464 1.057-1.063l0.020-0.36v-2.516l0.016-0.359c0.016-0.271 0.052-0.511 0.177-0.719 0.396-0.688 1.276-0.923 1.964-0.527 0.219 0.125 0.395 0.308 0.52 0.521s0.161 0.453 0.177 0.724l0.021 0.359v2.516l0.015 0.36c0.037 0.583 0.469 1.020 1.063 1.063l0.36 0.015v-3.953l0.015-0.359c0.011-0.265 0.052-0.516 0.177-0.724 0.401-0.688 1.281-0.921 1.964-0.521 0.219 0.125 0.401 0.308 0.525 0.527 0.12 0.208 0.157 0.453 0.172 0.719l0.021 0.359v2.516l0.016 0.36c0.036 0.588 0.468 1.025 1.063 1.063l0.359 0.015v-4.312c0-1.588-1.292-2.875-2.88-2.875zM15.437 13.459c-1.468 1.391-1.495 3.719-0.068 5.145 1.428 1.432 3.756 1.401 5.147-0.063 3.224-3.385-1.693-8.301-5.079-5.083zM19.5 17.527c-0.839 0.859-2.219 0.869-3.068 0.020-0.853-0.853-0.844-2.235 0.021-3.073 2.031-1.979 5.031 1.016 3.047 3.053z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib zoom';
-->
