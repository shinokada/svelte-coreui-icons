<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib issuu';
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
    d="M1.328 0c-0.734 0-1.328 0.594-1.328 1.328v14.672c0 8.839 7.161 16 16 16s16-7.161 16-16c0-8.839-7.161-16-16-16zM16.219 4.776c6.135 0.057 11.063 5.078 11.010 11.214-0.063 6.135-5.083 11.057-11.214 11s-11.063-5.078-11.005-11.208c0.057-6.135 5.078-11.063 11.208-11.005zM16.182 7.802c-4.495-0.036-8.167 3.573-8.208 8.063-0.042 4.495 3.568 8.172 8.068 8.219 2.156 0.016 4.234-0.823 5.771-2.333 1.542-1.51 2.417-3.573 2.432-5.729 0.042-4.495-3.563-8.172-8.052-8.219zM16.151 11.818c2.276 0.026 4.104 1.891 4.089 4.167-0.021 2.276-1.885 4.104-4.161 4.078-5.495-0.052-5.422-8.292 0.073-8.245z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib issuu';
-->
