<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib trello';
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
    d="M28 0h-24c-2.208 0-4 1.792-4 4v24c0 2.208 1.792 4 4 4h24c2.208 0 4-1.792 4-4v-24c0-2.208-1.792-4-4-4zM13.922 24.24c0 1.063-0.859 1.922-1.922 1.922h-5.922c-1.057 0-1.917-0.865-1.917-1.922v-18.161c0-1.057 0.859-1.917 1.917-1.917h5.922c1.063 0 1.922 0.859 1.922 1.917zM27.839 16.24c0 1.057-0.859 1.922-1.917 1.922h-5.922c-1.063 0-1.922-0.865-1.922-1.922v-10.161c0-1.057 0.865-1.917 1.922-1.917h5.922c1.057 0 1.917 0.859 1.917 1.917z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib trello';
-->
