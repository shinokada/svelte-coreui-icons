<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib quora';
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
    d="M16.984 24.932c-1.109-2.177-2.406-4.38-4.943-4.38-0.484 0-0.969 0.083-1.411 0.276l-0.865-1.714c1.047-0.906 2.745-1.62 4.927-1.62 3.391 0 5.13 1.635 6.516 3.719 0.818-1.776 1.203-4.182 1.203-7.167 0-7.443-2.323-11.26-7.76-11.26-5.359 0-7.677 3.818-7.677 11.26 0 7.406 2.318 11.188 7.677 11.188 0.854 0 1.625-0.094 2.333-0.302zM18.313 27.531c-1.177 0.318-2.422 0.49-3.656 0.49-7.135 0-14.12-5.693-14.12-13.974 0-8.354 6.984-14.047 14.12-14.047 7.255 0 14.167 5.651 14.167 14.047 0 4.672-2.177 8.469-5.344 10.922 1.016 1.531 2.057 2.552 3.536 2.552 1.599 0 2.24-1.219 2.359-2.198h2.078c0.12 1.302-0.536 6.677-6.359 6.677-3.531 0-5.396-2.036-6.792-4.438z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib quora';
-->
