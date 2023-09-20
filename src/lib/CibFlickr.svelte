<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib flickr';
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
    d="M0 16c0 4.099 3.323 7.417 7.422 7.417s7.422-3.318 7.422-7.417c0-4.099-3.323-7.417-7.422-7.417-4.094 0-7.422 3.318-7.422 7.417zM17.156 16c0 4.099 3.323 7.417 7.422 7.417 4.083 0 7.422-3.318 7.422-7.417s-3.323-7.417-7.417-7.417c-4.104 0-7.427 3.318-7.427 7.417z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib flickr';
-->
