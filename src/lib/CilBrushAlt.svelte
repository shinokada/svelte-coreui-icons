<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil brush alt';
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
    d="M56,256V496H456V256a48.055,48.055,0,0,0-48-48H321.383l13.075-106.263.068-.677a78.777,78.777,0,1,0-157.052,0l.027.338L190.617,208H104A48.055,48.055,0,0,0,56,256ZM424,464H88V320H424ZM226.8,240,209.348,98.192a46.777,46.777,0,1,1,93.3,0L285.205,240H408a16.019,16.019,0,0,1,16,16v32H88V256a16.019,16.019,0,0,1,16-16Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil brush alt';
-->
