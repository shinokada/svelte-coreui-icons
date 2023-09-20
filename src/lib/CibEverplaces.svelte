<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib everplaces';
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
    d="M14.453 31.964c-8.104-0.781-14.453-7.62-14.453-15.928 0-8.828 7.172-16 16-16s16 7.172 16 16c0 8.308-6.349 15.147-14.453 15.928v-9.396c2.964-0.704 5.161-3.365 5.161-6.532 0-3.703-3.005-6.708-6.708-6.708s-6.708 3.005-6.708 6.708c0 3.172 2.203 5.828 5.161 6.532zM13.932 12.421c0.86 0 1.552 0.699 1.552 1.552 0 0.855-0.692 1.548-1.552 1.548-0.853 0-1.547-0.693-1.547-1.548 0-0.853 0.697-1.552 1.547-1.552z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib everplaces';
-->
