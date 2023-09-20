<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib launchpad';
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
    d="M29.333 24.901l-5.912-3.407-6.375 3.683v6.823zM14.953 32v-6.823l-6.38-3.688-5.907 3.412zM15.995 23.364l6.385-3.681v-7.371l-6.38-3.676-6.38 3.676v7.371zM1.625 8.912v14.187l5.911-3.411v-7.371l-5.911-3.411zM27.781 10.407l-3.312 1.911v7.365l5.905 3.411v-14.187zM2.667 7.099l5.917 3.412 6.375-3.683v-6.823zM23.421 10.511l5.912-3.412-12.292-7.099v6.828z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib launchpad';
-->
