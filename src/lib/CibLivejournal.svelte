<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib livejournal';
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
    d="M24.12 19.593c-2.016 0.885-3.636 2.516-4.505 4.532l5.692 1.177-1.181-5.709zM3.303 11.088l-3.303-3.285c1.5-3.485 4.287-6.281 7.765-7.803h0.005l3.292 3.287c1.823-0.792 3.839-1.229 5.953-1.229 8.276 0 14.984 6.703 14.984 14.969 0 8.271-6.708 14.973-14.984 14.973-8.281 0-14.989-6.697-14.989-14.973 0-2.12 0.473-4.105 1.271-5.933l12.187 12.152c1.5-3.485 4.292-6.281 7.767-7.797l-12.188-12.161c-3.479 1.52-6.26 4.317-7.765 7.796z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib livejournal';
-->
