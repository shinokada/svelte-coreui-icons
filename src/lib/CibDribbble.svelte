<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib dribbble';
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
    d="M16 32c-8.817 0-16-7.183-16-16s7.183-16 16-16c8.817 0 16 7.183 16 16s-7.183 16-16 16zM29.495 18.188c-0.468-0.147-4.229-1.271-8.516-0.584 1.787 4.912 2.516 8.912 2.657 9.745 3.067-2.073 5.249-5.36 5.859-9.161zM21.339 28.599c-0.203-1.197-1-5.375-2.917-10.359l-0.088 0.025c-7.719 2.688-10.479 8.037-10.719 8.537 2.303 1.807 5.224 2.885 8.385 2.885 1.891 0 3.693-0.385 5.333-1.084zM5.849 25.161c0.307-0.536 4.057-6.74 11.109-9.021 0.177-0.061 0.359-0.113 0.536-0.161-0.344-0.781-0.719-1.557-1.109-2.317-6.823 2.036-13.443 1.953-14.041 1.937l-0.005 0.417c0 3.511 1.328 6.719 3.511 9.14zM2.62 13.219c0.615 0.011 6.244 0.036 12.635-1.661-2.265-4.027-4.708-7.412-5.067-7.907-3.824 1.803-6.677 5.323-7.568 9.563zM12.803 2.735c0.375 0.511 2.859 3.885 5.093 8 4.859-1.817 6.921-4.584 7.167-4.932-2.417-2.152-5.589-3.448-9.063-3.448-1.099 0-2.172 0.129-3.197 0.38zM26.579 7.38c-0.287 0.385-2.579 3.323-7.631 5.385 0.317 0.656 0.625 1.313 0.907 1.984 0.109 0.24 0.197 0.48 0.291 0.704 4.548-0.573 9.068 0.349 9.521 0.443-0.027-3.229-1.172-6.188-3.079-8.511z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib dribbble';
-->
