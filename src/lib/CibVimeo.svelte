<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib vimeo';
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
    d="M27.2 2h-22.4c-1.544 0-2.8 1.256-2.8 2.8v22.4c0 1.544 1.256 2.8 2.8 2.8h22.4c1.544 0 2.8-1.256 2.8-2.8v-22.4c0-1.544-1.256-2.8-2.8-2.8zM25.563 11.3c-0.087 1.969-1.462 4.669-4.125 8.087-2.75 3.575-5.081 5.363-6.981 5.363-1.181 0-2.175-1.087-2.994-3.269-1.594-5.831-2.275-9.25-3.587-9.25-0.15 0-0.681 0.319-1.587 0.95l-0.95-1.225c2.331-2.050 4.556-4.325 5.95-4.45 1.575-0.15 2.544 0.925 2.906 3.231 1.294 8.2 1.869 9.438 4.225 5.725 0.844-1.337 1.3-2.356 1.363-3.056 0.219-2.075-1.619-1.931-2.863-1.4 0.994-3.256 2.894-4.838 5.7-4.75 2.081 0.056 3.063 1.406 2.944 4.044z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib vimeo';
-->
