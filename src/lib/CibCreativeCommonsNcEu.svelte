<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib creative commons nc eu';
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
    d="M15.981 0.5c-9.006 0-15.481 7.3-15.481 15.5 0 8.519 6.981 15.5 15.481 15.5 8.137 0 15.519-6.306 15.519-15.5 0-8.688-6.725-15.5-15.519-15.5zM16.019 28.669c-7 0-12.725-5.781-12.725-12.669 0-1.45 0.231-2.825 0.681-4.125l4.106 1.819h-0.294v1.844h1.456c0 0.387-0.025 0.2-0.025 1.219h-1.425v1.844h1.688c0.713 4.188 4.2 6.331 7.788 6.331 1.662 0 3.162-0.494 4.050-0.987l-0.625-2.881c-0.544 0.288-1.763 0.675-2.956 0.675-1.762 0-3.631-0.681-4.206-3.137h5.644l8.019 3.55c-0.094 0.131-3.513 6.519-11.175 6.519zM14.975 16.756l-0.031-0.025 0.056 0.025zM19.8 15.538h0.231v-1.844h-4.394l-1.787-0.788c0.156-0.344 0.337-0.656 0.55-0.894 0.806-0.988 1.944-1.4 3.194-1.4 1.144 0 2.206 0.337 2.881 0.625l0.725-2.956c-0.938-0.413-2.313-0.775-3.894-0.775-2.438 0-4.512 0.987-5.994 2.644-0.331 0.381-0.613 0.806-0.869 1.256l-5.1-2.256c4.038-6.050 9.856-5.85 10.669-5.85 7.063 0 12.688 5.637 12.688 12.712 0 1.169-0.131 2.269-0.394 3.306z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib creative commons nc eu';
-->
