<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib mastodon';
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
    d="M30.921 10.505c0-6.943-4.547-8.975-4.547-8.975-2.292-1.057-6.229-1.5-10.323-1.531h-0.099c-4.089 0.031-8.027 0.473-10.317 1.531 0 0-4.553 2.032-4.553 8.975 0 1.588-0.031 3.489 0.021 5.505 0.167 6.792 1.245 13.479 7.521 15.14 2.896 0.767 5.38 0.928 7.38 0.819 3.631-0.204 5.667-1.297 5.667-1.297l-0.12-2.636c0 0-2.593 0.819-5.505 0.719-2.885-0.099-5.932-0.307-6.396-3.853-0.047-0.328-0.067-0.661-0.067-0.995 0 0 2.832 0.692 6.427 0.859 2.192 0.099 4.249-0.129 6.344-0.38 4.005-0.473 7.5-2.948 7.937-5.203 0.687-3.552 0.629-8.677 0.629-8.677zM25.557 19.453h-3.328v-8.161c0-1.719-0.724-2.595-2.172-2.595-1.599 0-2.401 1.037-2.401 3.084v4.469h-3.312v-4.469c0-2.047-0.803-3.084-2.401-3.084-1.448 0-2.172 0.876-2.172 2.595v8.156h-3.328v-8.401c0-1.719 0.437-3.083 1.317-4.093 0.907-1.011 2.089-1.532 3.563-1.532 1.704 0 2.995 0.657 3.849 1.969l0.828 1.391 0.828-1.391c0.855-1.312 2.145-1.969 3.849-1.969 1.473 0 2.661 0.521 3.568 1.532 0.875 1.011 1.312 2.375 1.312 4.093z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib mastodon';
-->
