<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil restaurant';
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
    d="M224,160H176V48H144V160H96V48H64V172c0,45.505,34.655,83.393,80,90.715V472h32V262.715c45.345-7.322,80-45.21,80-90.715V48H224Zm-64,72c-27.811,0-51.524-16.722-60.33-40H220.33C211.524,215.278,187.811,232,160,232Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M413.567,40.187A138.648,138.648,0,0,0,296,177.224V344H400V472h32V37.351ZM400,312H328V177.224A105.986,105.986,0,0,1,400,76.313Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil restaurant';
-->
