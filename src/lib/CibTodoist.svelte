<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib todoist';
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
    d="M28 0h-24c-2.197 0-4 1.803-4 4v5.145c0 0 5.14 2.985 5.464 3.172 0.411 0.24 0.927 0.235 1.339 0 0.348-0.197 10.692-6.145 10.848-6.235 0.371-0.213 0.771-0.14 0.995-0.009 0.219 0.124 0.813 0.463 1.12 0.635 0.313 0.183 0.297 0.672 0.021 0.833l-12.948 7.453c-0.464 0.265-0.921 0.271-1.401 0-0.801-0.453-4.109-2.375-5.437-3.151v2.692l5.464 3.172c0.411 0.24 0.927 0.24 1.339 0 0.348-0.192 10.692-6.145 10.848-6.235 0.371-0.213 0.771-0.14 0.995-0.009 0.219 0.129 0.813 0.463 1.12 0.64 0.313 0.177 0.297 0.667 0.021 0.828s-12.385 7.125-12.948 7.453c-0.464 0.265-0.921 0.271-1.401 0-0.801-0.453-4.109-2.375-5.437-3.151v2.692l5.464 3.172c0.411 0.245 0.927 0.24 1.339 0 0.348-0.192 10.692-6.14 10.848-6.235 0.371-0.213 0.771-0.14 0.995-0.009 0.219 0.129 0.813 0.463 1.12 0.64 0.313 0.177 0.297 0.667 0.021 0.828l-12.948 7.453c-0.464 0.265-0.921 0.271-1.401 0.005-0.801-0.459-4.109-2.38-5.437-3.156v5.375c0 2.197 1.803 4 4 4h24c2.197 0 4-1.803 4-4v-24c0-2.197-1.803-4-4-4z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib todoist';
-->
