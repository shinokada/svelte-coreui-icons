<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib appveyor';
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
    d="M16 0c8.803 0 16 7.197 16 16s-7.197 16-16 16c-8.803 0-16-7.197-16-16s7.197-16 16-16zM19.921 19.12c1.761-2.24 1.516-5.437-0.724-7.12-2.156-1.683-5.359-1.281-7.197 0.959-1.76 2.239-1.521 5.443 0.719 7.12 2.24 1.681 5.443 1.281 7.203-0.959zM11.36 29.521c0.957 0.4 3.041 0.796 4.077 0.796l6.964-10.077c2.239-3.36 1.677-7.923-1.443-10.401-2.797-2.24-6.719-2.156-9.521 0l-9.677 7.443c0.24 2.557 0.959 3.839 0.959 3.916l5.521-6c-0.401 2.641 0.563 5.365 2.801 7.043 1.917 1.52 4.24 1.921 6.48 1.443z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib appveyor';
-->
