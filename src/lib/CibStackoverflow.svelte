<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib stackoverflow';
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
    d="M25.312 29.151v-8.536h2.849v11.385h-25.703v-11.385h2.839v8.536zM8.145 26.307h14.324v-2.848h-14.324zM8.495 19.839l13.975 2.916 0.599-2.76-13.969-2.912zM10.307 13.099l12.939 6.037 1.203-2.6-12.937-6.041-1.204 2.584zM13.927 6.719l10.953 9.141 1.813-2.163-10.953-9.135-1.803 2.151zM21 0l-2.328 1.724 8.541 11.473 2.328-1.724z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib stackoverflow';
-->
