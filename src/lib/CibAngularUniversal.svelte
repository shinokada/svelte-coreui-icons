<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib angular universal';
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
    d="M20.803 15.041v1.917c0 0.353-0.287 0.64-0.641 0.64h-8.323c-0.355 0-0.641-0.287-0.641-0.64v-1.917c0-0.353 0.287-0.64 0.641-0.64h8.323c0.355 0 0.641 0.287 0.641 0.64zM16 20.803c-2.136 0-2.136 3.197 0 3.197s2.136-3.197 0-3.197zM20.161 9.599h-8.323c-0.355 0-0.641 0.287-0.641 0.641v1.921c0 0.355 0.287 0.641 0.641 0.641h8.323c0.355 0 0.641-0.287 0.641-0.641v-1.921c0-0.355-0.287-0.641-0.641-0.641zM30.88 5.328l-2.287 19.645-12.624 7.027-12.609-7.027-2.24-19.645 14.849-5.328zM22.401 8.317c0-1.057-0.86-1.916-1.923-1.916h-8.957c-1.063 0-1.923 0.859-1.923 1.916v15.365c0 1.057 0.86 1.916 1.923 1.916h8.957c1.063 0 1.923-0.859 1.923-1.916z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib angular universal';
-->
