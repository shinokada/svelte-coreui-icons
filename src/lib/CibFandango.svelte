<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib fandango';
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
    d="M18.219 9.276l-7.484 2.052 1.52 5.631 7.485-2.052 1.525 5.624-7.484 1.991 1.459 5.629-7.491 1.989-1.853-6.755c1.125-1.323 1.588-3.183 1.125-4.969-0.532-1.791-1.855-3.181-3.443-3.776l-1.86-6.957 15.041-3.975zM27.693 9.011l-2.448-8.943-25.245 6.687 2.453 9.011c1.453 0.271 2.781 1.391 3.177 2.984 0.463 1.589-0.136 3.177-1.261 4.24l2.385 8.943 25.245-6.755-2.385-8.943c-1.527-0.271-2.781-1.391-3.245-2.984-0.4-1.589 0.131-3.245 1.324-4.24z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib fandango';
-->
