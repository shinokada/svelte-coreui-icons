<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib protonmail';
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
    d="M16 27.135c0 0-1.464-0.146-2.604-0.938-1.151-0.797-8.776-6.25-8.776-6.25v10.797c0 0 0.063 1.255 1.448 1.255h19.865c1.38 0 1.448-1.255 1.448-1.255v-10.802c0 0-7.63 5.458-8.776 6.255-1.146 0.792-2.604 0.938-2.604 0.938zM16 0.005c0 0-9.432-0.313-11.38 10.161v7.13c0 0 0.078 0.766 2.229 2.318 2.141 1.547 7.693 5.911 9.156 5.911 1.448 0 7.005-4.365 9.151-5.917 2.141-1.552 2.224-2.313 2.224-2.313v-7.135c-1.948-10.464-11.38-10.156-11.38-10.156zM22.464 14.052h-12.922v-3.885c1.313-5.203 6.458-5.271 6.458-5.271s5.151 0.068 6.464 5.271z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib protonmail';
-->
