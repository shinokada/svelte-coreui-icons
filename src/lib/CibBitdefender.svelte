<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib bitdefender';
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
    d="M2.245 0v0.473l1.645 1.396c1.969 1.604 2.224 1.923 2.224 3.371v26.76h11.531c6.048 0 12.109-2.172 12.109-9.131 0-4.109-2.9-7.281-6.916-7.729v-0.093c3.301-0.989 5.563-3.385 5.563-7 0-5.833-4.975-8.041-9.803-8.041l-16.348-0.005zM11.812 4.885h4.704c3.177 0 4.161 0.437 5.124 1.349 0.729 0.697 1.063 1.651 1.068 2.76 0 1.036-0.359 1.959-1.109 2.672-0.943 0.901-2.235 1.349-4.588 1.349h-5.193v-8.131zM11.812 17.896h5.469c4.604 0 6.781 1.177 6.781 4.52 0 4.204-4.079 4.704-7.011 4.704h-5.24z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib bitdefender';
-->
