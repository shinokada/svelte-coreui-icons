<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib cc diners club';
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
    d="M13.317 6.217c-5.383 0-9.767 4.367-9.767 9.767 0 5.384 4.383 9.767 9.767 9.767 5.4 0 9.767-4.383 9.767-9.767 0-5.4-4.367-9.767-9.767-9.767zM11.1 21.75c-2.317-0.883-3.967-3.133-3.967-5.767s1.65-4.883 3.967-5.783zM15.533 21.767v-11.567c2.317 0.9 3.967 3.15 3.967 5.783s-1.65 4.883-3.967 5.783zM29.333 3.556h-26.667c-1.472 0-2.667 1.194-2.667 2.667v19.556c0 1.472 1.194 2.667 2.667 2.667h26.667c1.472 0 2.667-1.194 2.667-2.667v-19.556c0-1.472-1.194-2.667-2.667-2.667zM18.317 26.667h-5.017c-5.9 0-10.766-4.75-10.766-10.567 0-6.367 4.867-10.767 10.766-10.767h5.017c5.833 0 11.15 4.4 11.15 10.767 0 5.817-5.317 10.567-11.15 10.567z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib cc diners club';
-->
