<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib pluralsight';
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
    d="M20.959 2.339c-7.521-2.74-15.876 1.161-18.599 8.661-2.761 7.599 1.14 15.943 8.661 18.683 7.541 2.739 15.943-1.161 18.676-8.683 2.745-7.563-1.156-15.917-8.697-18.661zM16 32c-8.803 0-16-7.197-16-16s7.197-16 16-16c8.803 0 16 7.197 16 16s-7.197 16-16 16zM11.901 7.74v16.52l14.339-8.26zM13.303 10.099l10.197 5.901-10.197 5.901v-11.803zM8.599 9.541v12.917l11.204-6.459zM10 11.937l7.083 4.063-7.083 4.083v-8.165z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib pluralsight';
-->
