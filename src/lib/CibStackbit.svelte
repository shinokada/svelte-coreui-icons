<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib stackbit';
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
    d="M28.417 17.969l-12.281 6.839-12.531-6.839c-0.469-0.26-1.068-0.083-1.323 0.391-0.26 0.474-0.083 1.068 0.396 1.328l12.995 7.109c0.292 0.172 0.661 0.172 0.953 0l12.75-7.109c0.469-0.266 0.635-0.859 0.37-1.328-0.25-0.479-0.854-0.661-1.328-0.391zM5.125 13.432l11.010-6.224 12.26 7.083c0.474 0.266 1.073 0.099 1.349-0.37 0.266-0.474 0.099-1.073-0.37-1.349l-12.75-7.354c-0.302-0.172-0.672-0.172-0.979 0l-12.995 7.354c-0.661 0.37-0.661 1.323 0 1.719l12.995 7.354c0.474 0.266 1.073 0.099 1.349-0.37 0.26-0.474 0.099-1.073-0.37-1.349zM0.078 18.583v-4.906c-0.115-1.193 0.495-2.339 1.542-2.917l12.995-7.354c0.943-0.547 2.104-0.536 3.042 0.021l12.75 7.359c1.021 0.589 1.609 1.714 1.516 2.891v4.906c0.099 1.193-0.516 2.339-1.568 2.917l-12.75 7.109c-0.922 0.516-2.042 0.516-2.964 0l-12.995-7.109c-1.078-0.589-1.641-1.745-1.568-2.917z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib stackbit';
-->
