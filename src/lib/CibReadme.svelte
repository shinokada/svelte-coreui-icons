<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib readme';
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
    d="M29.35 4.361h-7.767c-2.672 0-4.994 1.85-5.578 4.461-0.589-2.611-2.906-4.461-5.578-4.461h-7.761c-1.472 0-2.667 1.194-2.667 2.667v13.656c0 1.472 1.194 2.667 2.667 2.667h4.983c5.678 0 7.372 1.355 8.183 4.167 0.039 0.156 0.289 0.156 0.333 0 0.817-2.811 2.511-4.167 8.183-4.167h4.983c1.472 0 2.667-1.194 2.667-2.667v-13.65c0-1.467-1.183-2.661-2.65-2.672zM13.444 19.105c0 0.106-0.083 0.194-0.194 0.194h-8.906c-0.105 0-0.194-0.083-0.194-0.194v-1.272c0-0.105 0.083-0.194 0.194-0.194h8.911c0.105 0 0.194 0.083 0.194 0.194v1.272zM13.444 15.722c0 0.105-0.083 0.194-0.194 0.194h-8.906c-0.105 0-0.194-0.083-0.194-0.194v-1.272c0-0.106 0.083-0.194 0.194-0.194h8.911c0.105 0 0.194 0.083 0.194 0.194v1.272zM13.444 12.339c0 0.105-0.083 0.194-0.194 0.194h-8.906c-0.105 0-0.194-0.083-0.194-0.194v-1.272c0-0.105 0.083-0.194 0.194-0.194h8.911c0.105 0 0.194 0.083 0.194 0.194v1.272zM27.85 19.1c0 0.105-0.083 0.194-0.194 0.194h-8.906c-0.105 0-0.194-0.083-0.194-0.194v-1.272c0-0.105 0.083-0.194 0.194-0.194h8.911c0.106 0 0.194 0.083 0.194 0.194v1.272zM27.85 15.717c0 0.106-0.083 0.194-0.194 0.194h-8.906c-0.105 0-0.194-0.083-0.194-0.194v-1.272c0-0.105 0.083-0.194 0.194-0.194h8.911c0.106 0 0.194 0.083 0.194 0.194v1.272zM27.85 12.333c0 0.105-0.083 0.194-0.194 0.194h-8.906c-0.105 0-0.194-0.083-0.194-0.194v-1.267c0-0.105 0.083-0.194 0.194-0.194h8.911c0.106 0 0.194 0.083 0.194 0.194v1.267z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib readme';
-->
