<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib common workflow language';
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
    d="M16.083 12.271l-4.755 4.76 4.693 4.682 2.063-2.063-2.635-2.62 2.698-2.698zM18.141 29.896l-2.672-2.729 5.047-5.089-2.078-2.094-7.109 7.203 0.156 0.151-0.021 0.010 4.609 4.646zM20.672 11.813l-4.917-4.724 4.917-4.964-2.089-2.125-7.12 7.135 0.146 0.135v0.010l7 6.589z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib common workflow language';
-->
