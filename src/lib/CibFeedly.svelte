<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib feedly';
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
    d="M18.479 2.651c-1.364-1.391-3.604-1.391-4.968 0l-12.484 12.719c-1.365 1.412-1.365 3.652 0 5.057l8.911 9.079c0.636 0.573 1.464 0.885 2.317 0.885h7.485c0.943 0 1.839-0.38 2.495-1.052l8.739-8.901c1.371-1.411 1.371-3.651 0-5.063zM18.136 25.88l-1.251 1.265c-0.093 0.1-0.219 0.157-0.355 0.157h-1.067c-0.125-0.005-0.24-0.048-0.328-0.131l-1.276-1.292c-0.193-0.203-0.193-0.52 0-0.724l1.785-1.812c0.193-0.204 0.511-0.204 0.709 0l1.781 1.812c0.197 0.204 0.197 0.527 0 0.724zM18.136 18.265l-4.985 5.079c-0.093 0.093-0.224 0.151-0.359 0.145h-1.063c-0.125 0.005-0.245-0.041-0.333-0.12l-1.271-1.296c-0.193-0.199-0.193-0.521 0-0.724l5.52-5.62c0.193-0.199 0.516-0.199 0.709 0l1.781 1.817c0.197 0.199 0.197 0.521 0 0.719zM18.136 10.656l-8.724 8.88c-0.095 0.1-0.219 0.152-0.355 0.152h-1.068c-0.125 0-0.24-0.043-0.333-0.125l-1.271-1.297c-0.192-0.197-0.192-0.52 0-0.719l9.26-9.427c0.193-0.199 0.511-0.199 0.709 0l1.781 1.812c0.197 0.204 0.197 0.527 0 0.724z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib feedly';
-->
