<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib f secure';
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
    d="M31.907 3.921c-9.552-3.395-19.933-3.676-29.652-0.801-1.629 0.391-2.609 2.052-2.161 3.667 0.532 2.135 1.308 4.588 2.24 6.812 0.016 0.052 0.041 0.027 0.041-0.025-0.135-1.043 0.667-2.36 2.24-2.839 7.557-2.407 15.692-2.297 23.188 0.307 1.145 0.396 2.427-0.229 2.796-1.416 0.932-3 1.308-5.037 1.401-5.547 0.016-0.095-0.068-0.131-0.093-0.157zM8.864 10.521c-1.145 0.239-2.728 0.615-3.916 1.009-2.375 0.819-2.265 3.709-1 4.631 0.093-0.536 0.667-1.265 1.307-1.511 2.371-0.932 4.917-1.489 7.491-1.719-1.308-0.531-2.584-1.292-3.865-2.411zM27.771 16.307c-6.891-3.239-14.801-3.552-21.932-0.869-1.131 0.427-1.839 1.803-1.131 3.109 1.235 2.235 2.641 4.375 4.199 6.401-0.224-0.776 0.172-2.213 1.692-2.683 4.204-1.292 8.615-0.744 11.547 0.443 0.828 0.333 2 0.131 2.657-0.853 1.119-1.724 2.14-3.516 3.052-5.36 0.041-0.083 0-0.145-0.084-0.188zM20.959 26.667c-1.229-0.62-2.355-1.432-3.333-2.401-0.453-0.453-1.12-1.104-1.823-1.88-1.605 0-3.163 0.161-4.829 0.693-1.547 0.484-1.692 2.271-1.015 3.203 1.145 1.427 1.948 2.197 3.229 3.521 1.411 1.385 3.667 1.395 5.093 0.025 1-1 1.615-1.667 2.745-2.948 0.067-0.068 0.041-0.187-0.068-0.213z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib f secure';
-->
