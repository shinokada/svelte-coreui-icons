<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib sitepoint';
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
    d="M3.297 14.042l2.359 2.255 7.464 6.854 3.198-3.057c0.281-0.396 0.26-0.938-0.057-1.313l-2.943-2.536 0.016-0.005-3.161-3.021c-0.37-0.422-0.359-1.042 0.026-1.438l8.521-8.104-3.859-3.677-11.557 10.984c-0.885 0.844-0.885 2.214 0 3.057zM28.703 17.958l-2.359-2.255-7.464-6.854-3.214 3.057c-0.292 0.396-0.276 0.938 0.063 1.313l2.938 2.521h-0.005l3.156 3.021c0.359 0.417 0.359 1.021-0.036 1.417l-8.521 8.099 3.88 3.724 11.557-10.984c0.885-0.844 0.891-2.214 0-3.057z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib sitepoint';
-->
