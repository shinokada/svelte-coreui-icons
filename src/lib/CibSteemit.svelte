<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib steemit';
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
    d="M27.973 9.661c-1.285-1.287-2.828-2.287-4.531-2.937 0.964-2.823 4.369-3.855 4.369-3.855-5.203-2.479-11.031-3.348-16.733-2.484-3.052 0.604-5.803 2.245-7.787 4.641-2.141 2.457-3.204 5.676-2.959 8.932 0.251 3.249 1.792 6.271 4.281 8.38 0.797 0.683 2.579 1.74 2.609 1.797-1.172 2.968-4.907 3.781-4.907 3.781 3.563 2.047 7.495 3.369 11.568 3.885 1.844 0.233 3.713 0.26 5.563 0.067 3.208-0.38 6.192-1.843 8.453-4.161 2.416-2.375 3.787-5.615 3.801-9.005 0.016-3.391-1.328-6.645-3.724-9.041zM25.703 25.74c-1.875 1.776-4.281 2.891-6.848 3.172-1.579 0.167-3.167 0.161-4.74-0.021-1.932-0.265-3.828-0.781-5.625-1.536 0.86-0.803 1.541-1.776 2-2.86 0.219-0.568 0.193-1.197-0.068-1.745-1.76-3.624-0.989-7.968 1.901-10.771 3.781-3.661 9.803-3.629 13.547 0.079 3.683 3.844 3.609 9.927-0.167 13.683z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib steemit';
-->
