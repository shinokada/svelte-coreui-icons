<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil gradient';
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
    d="M440,40H72A16,16,0,0,0,56,56V456a16,16,0,0,0,16,16H440a16,16,0,0,0,16-16V56A16,16,0,0,0,440,40ZM424,232H376v48h48v48H376v40H328V328H280v40H232V328H184v40H136V328H88V280h48V232H88V72H424Z"
  />
  <rect width="48" height="48" x="136" y="280" fill="var(--ci-primary-color, {color})" />
  <rect width="48" height="48" x="184" y="232" fill="var(--ci-primary-color, {color})" />
  <rect width="48" height="48" x="232" y="280" fill="var(--ci-primary-color, {color})" />
  <rect width="48" height="48" x="280" y="232" fill="var(--ci-primary-color, {color})" />
  <rect width="48" height="48" x="328" y="280" fill="var(--ci-primary-color, {color})" />
  <rect width="48" height="48" x="136" y="184" fill="var(--ci-primary-color, {color})" />
  <rect width="48" height="48" x="232" y="184" fill="var(--ci-primary-color, {color})" />
  <rect width="48" height="48" x="328" y="184" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil gradient';
-->
