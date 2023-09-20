<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil newspaper';
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
    d="M88,72V388a20,20,0,0,1-40,0V152H16V388a52.059,52.059,0,0,0,52,52H444a52.059,52.059,0,0,0,52-52V72ZM464,388a20.023,20.023,0,0,1-20,20H116a51.722,51.722,0,0,0,4-20V104H464Z"
  />
  <path fill="var(--ci-primary-color, {color})" d="M296,136H152V296H296ZM264,264H184V168h80Z" />
  <rect width="104" height="32" x="328" y="136" fill="var(--ci-primary-color, {color})" />
  <rect width="104" height="32" x="328" y="200" fill="var(--ci-primary-color, {color})" />
  <rect width="104" height="32" x="328" y="264" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil newspaper';
-->
