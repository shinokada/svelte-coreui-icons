<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil crop rotate';
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
  viewBox="0 0 512 512"
>
  <path
    fill="var(--ci-primary-color, {color})"
    d="M49.386,256c0-114.184,92.8-207.1,206.935-207.294V90.465L368,15.965H256.321L256,16c-63.783.094-123.414,25.679-168.525,70.79A237.732,237.732,0,0,0,17.386,256Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M255.987,463.367V432L144.308,496H255.987c132.4-.36,240-108.214,240-239.965h-32C463.982,370.141,370.738,463.007,255.987,463.367Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M337.372,152H184V120H152v32H120v32h32V360H320v32h32V360h32V328H352V222.628l-32,32V328H201.373L384,145.372V128H361.372ZM184,305.372V184H305.372Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil crop rotate';
-->
