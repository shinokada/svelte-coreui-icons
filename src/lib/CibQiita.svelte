<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib qiita';
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
    d="M10.511 15.484c0-2.557-1.964-5.203-5.297-5.203-2.563 0-5.213 1.964-5.213 5.292 0 2.557 1.964 5.208 5.297 5.208 1.067 0 2.135-0.344 3.031-0.984l1.541 1.536 0.683-0.683-1.453-1.453c0.896-0.979 1.412-2.26 1.412-3.713zM5.213 11.219c2.432 0 4.36 1.88 4.36 4.312 0 2.089-1.625 4.308-4.319 4.308-2.692 0-4.317-2.177-4.317-4.265 0-2.729 2.183-4.355 4.276-4.355zM13.031 13.312h0.896v7.251h-0.896zM13.459 12.328c-0.428 0.005-0.771-0.344-0.771-0.765 0-0.427 0.343-0.771 0.771-0.771 0.427 0 0.771 0.344 0.771 0.771s-0.344 0.765-0.771 0.765zM17.088 12.328c-0.427 0.005-0.771-0.344-0.771-0.765 0-0.427 0.344-0.771 0.771-0.771 0.428 0 0.772 0.344 0.772 0.771s-0.344 0.765-0.772 0.765zM16.661 13.312h0.901v7.251h-0.901zM22.943 20.693c-1.667 0-2.651-1.281-2.651-2.557v-6.829h0.901v2.005h3.161v0.896h-3.161v3.969c0 0.807 0.64 1.661 1.749 1.661 0.297 0 0.599-0.084 0.855-0.255l0.083-0.043 0.427 0.765-0.083 0.048c-0.385 0.213-0.855 0.339-1.281 0.339zM28.88 20.735c-2.432 0-3.885-1.917-3.885-3.797 0-2.432 1.923-3.885 3.803-3.885 0.984 0 1.749 0.344 2.307 0.984v-0.724h0.896v7.251h-0.896v-0.808c-0.516 0.641-1.281 0.98-2.224 0.98zM28.797 13.953c-1.453 0-2.907 1.109-2.907 2.984 0 1.453 1.109 2.901 2.989 2.901 0.855 0 1.708-0.38 2.265-1.068v-3.755c-0.588-0.683-1.448-1.073-2.348-1.063z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib qiita';
-->
