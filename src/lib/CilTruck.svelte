<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil truck';
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
    d="M441.885,141.649A32.028,32.028,0,0,0,415.669,128H336V80a32.036,32.036,0,0,0-32-32H48A32.036,32.036,0,0,0,16,80V408H69.082a67.982,67.982,0,0,0,133.836,0H309.082a67.982,67.982,0,0,0,133.836,0H496V226.522a23.882,23.882,0,0,0-4.338-13.763ZM47.98,80H304V256H48ZM136,432a36,36,0,1,1,36-36A36.04,36.04,0,0,1,136,432Zm240,0a36,36,0,1,1,36-36A36.04,36.04,0,0,1,376,432Zm88-56H440.994a68,68,0,0,0-129.988,0H200.994a68,68,0,0,0-129.988,0H48V288H464Zm0-120H336V160h79.669L464,229.044Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil truck';
-->
