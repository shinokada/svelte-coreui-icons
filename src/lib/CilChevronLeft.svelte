<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil chevron left';
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
    d="M327.086,496.89l-142.6-142.6-11.258-11.15-85.6-85.6.054-.054,11.259-11.367,85.5-85.5.054.054,142.6-142.595L424,114.989,281.506,257.483,424,399.978ZM184.64,309.3l11.266,11.159,131.18,131.181,51.658-51.658L236.251,257.483,378.744,114.989,327.086,63.331,184.694,205.725l-.054-.054-51.813,51.812Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil chevron left';
-->
