<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib pocket';
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
    d="M25.083 13.677l-7.526 7.229c-0.427 0.406-0.974 0.609-1.521 0.609s-1.099-0.203-1.521-0.609l-7.531-7.229c-0.875-0.833-0.901-2.224-0.063-3.099s2.224-0.906 3.099-0.068l6.016 5.76 6.021-5.76c0.88-0.839 2.26-0.807 3.099 0.068 0.844 0.859 0.823 2.26-0.057 3.099zM31.859 3.62c-0.396-1.146-1.5-1.917-2.719-1.917h-26.234c-1.203 0-2.292 0.75-2.719 1.875-0.125 0.333-0.188 0.677-0.188 1.031v9.656l0.115 1.922c0.464 4.37 2.729 8.193 6.24 10.854 0.063 0.047 0.125 0.094 0.193 0.141l0.036 0.031c1.885 1.37 3.99 2.302 6.26 2.76 1.047 0.214 2.12 0.323 3.188 0.323 0.984 0 1.974-0.094 2.943-0.276 0.12-0.036 0.234-0.057 0.354-0.078 0.031 0 0.063-0.021 0.099-0.036 2.177-0.484 4.198-1.385 6.010-2.703l0.036-0.042 0.182-0.141c3.5-2.656 5.766-6.479 6.245-10.865l0.099-1.917v-9.646c0-0.333-0.042-0.667-0.161-0.99z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib pocket';
-->
