<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib bluetooth';
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
    d="M20.288 10.694l-2.681 2.681-0.019-5.375 2.7 2.694zM17.587 24.431l2.694-2.694-2.681-2.681zM28 16.212c0 12.85-4.494 15.788-11.569 15.788s-12.431-2.938-12.431-15.788c0-12.85 5.212-16.212 12.288-16.212s11.712 3.369 11.712 16.212zM18.094 16.212l4.962-5.537-7.819-8.394v11.056l-4.613-4.612-1.688 1.681 5.794 5.812-5.794 5.813 1.681 1.681 4.613-4.612 0.144 10.625 7.962-7.969z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib bluetooth';
-->
