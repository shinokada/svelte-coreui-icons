<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib steem';
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
    d="M5.234 3.464c0.354 0.057-0.526 2.37-0.036 5.010 0.427 2.266 5.75 11.036 5.531 14.042-0.172 1.891-4.542 6.318-5.005 6.026-0.5-0.141 1.328-3.151 0.651-5.661-0.786-2.922-5.479-10.479-5.474-13.818 0-2.443 4.016-5.76 4.333-5.599zM15.255 0.005c0.448 0.078-0.677 3.031-0.047 6.391 0.542 2.891 7.333 14.073 7.057 17.906-0.224 2.411-5.797 8.057-6.385 7.682-0.641-0.177 1.693-4.010 0.828-7.208-1.005-3.729-6.984-13.37-6.979-17.625 0-3.115 5.12-7.344 5.526-7.146zM25.594 3.464c0.359 0.057-0.526 2.37-0.031 5.010 0.422 2.266 5.75 11.036 5.531 14.042-0.167 1.891-4.547 6.318-5.005 6.026-0.505-0.141 1.328-3.146 0.651-5.661-0.792-2.922-5.484-10.479-5.474-13.813 0-2.443 4.016-5.76 4.328-5.604z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib steem';
-->
