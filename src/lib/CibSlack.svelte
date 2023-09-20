<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib slack';
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
    d="M6.724 20.219c-0.005 1.855-1.505 3.36-3.36 3.365-1.859-0.005-3.359-1.505-3.364-3.365 0.005-1.855 1.511-3.355 3.364-3.359h3.36zM8.416 20.219c0.005-1.855 1.511-3.355 3.365-3.359 1.849 0.004 3.355 1.504 3.359 3.359v8.417c-0.004 1.853-1.504 3.359-3.359 3.364-1.86-0.005-3.36-1.511-3.365-3.364zM11.781 6.724c-1.855-0.005-3.36-1.505-3.365-3.36 0.005-1.853 1.505-3.359 3.365-3.364 1.855 0.005 3.355 1.511 3.359 3.364v3.36zM11.781 8.416c1.855 0.005 3.355 1.505 3.359 3.365-0.004 1.855-1.504 3.355-3.359 3.359h-8.417c-1.853-0.004-3.359-1.504-3.364-3.359 0.005-1.86 1.511-3.36 3.364-3.365zM25.276 11.781c0.005-1.86 1.505-3.36 3.36-3.365 1.853 0.005 3.359 1.505 3.364 3.365-0.005 1.855-1.511 3.355-3.364 3.359h-3.36zM23.584 11.781c-0.005 1.855-1.511 3.355-3.365 3.359-1.855-0.004-3.355-1.509-3.359-3.359v-8.417c0.004-1.853 1.504-3.359 3.359-3.364 1.86 0.005 3.36 1.505 3.365 3.364zM20.219 25.276c1.86 0 3.36 1.505 3.365 3.36-0.005 1.859-1.505 3.359-3.365 3.364-1.855-0.005-3.355-1.511-3.359-3.364v-3.36zM20.219 23.584c-1.855-0.005-3.355-1.511-3.359-3.365 0.004-1.855 1.504-3.355 3.359-3.359h8.417c1.853 0.004 3.359 1.504 3.364 3.359-0.005 1.86-1.505 3.36-3.364 3.365z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib slack';
-->
