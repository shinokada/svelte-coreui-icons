<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib google podcasts';
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
    d="M2 12.906c-1.104 0-2 0.896-2 2v2.172c0 2.667 4 2.667 4 0v-2.172c0-1.104-0.896-2-2-2zM30 12.906c-1.104 0-2 0.896-2 2v2.172c0 2.667 4 2.667 4 0v-2.172c0-1.104-0.896-2-2-2zM8.906 19.453c-1.104 0-2 0.896-2 2v2.172c0 2.667 4 2.667 4 0v-2.156c0-1.109-0.891-2-2-2zM8.906 6.359c-1.104 0-2 0.896-2 2v7.146c0 2.667 4 2.667 4 0v-7.156c0-1.109-0.891-2-2-2zM23.094 6.359c-1.109 0-2 0.896-2 2v2.188c0 2.667 4 2.667 4 0v-2.188c0-1.104-0.896-2-2-2zM16 0c-1.104 0-2 0.896-2 2v2.172c0 2.667 4 2.667 4 0v-2.172c0-1.104-0.896-2-2-2zM16 25.813c-1.104 0-2 0.896-2 2v2.188c-0.010 2.667 3.99 2.682 4 0.016v-2.188c0-1.094-0.896-2-2-2zM23.094 14.531c-1.109 0-2 0.906-2 2v7.109c0 2.667 4 2.667 4 0v-7.109c0-1.104-0.896-2-2-2zM16 8.172c-1.104 0-2 0.906-2 2v11.641c0 2.667 4 2.667 4 0v-11.625c0-1.109-0.896-2-2-2z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib google podcasts';
-->
