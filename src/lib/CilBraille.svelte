<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil braille';
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
    d="M112,192a48,48,0,1,0-48,48A48.055,48.055,0,0,0,112,192Zm-64,0a16,16,0,1,1,16,16A16.019,16.019,0,0,1,48,192Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M320,240a48,48,0,1,0-48-48A48.055,48.055,0,0,0,320,240Zm0-64a16,16,0,1,1-16,16A16.019,16.019,0,0,1,320,176Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M184,112a48,48,0,1,0-48-48A48.055,48.055,0,0,0,184,112Zm0-64a16,16,0,1,1-16,16A16.019,16.019,0,0,1,184,48Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M448,144a48,48,0,1,0,48,48A48.055,48.055,0,0,0,448,144Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,448,208Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M448,112a48,48,0,1,0-48-48A48.055,48.055,0,0,0,448,112Zm0-64a16,16,0,1,1-16,16A16.019,16.019,0,0,1,448,48Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M320,112a48,48,0,1,0-48-48A48.055,48.055,0,0,0,320,112Zm0-64a16,16,0,1,1-16,16A16.019,16.019,0,0,1,320,48Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M376,320a47.691,47.691,0,0,0-23.549,6.184,47.958,47.958,0,0,0-64-16A47.991,47.991,0,0,0,232,290.742V248a48,48,0,0,0-96,0v96.038A79.6,79.6,0,0,0,88,328a24.028,24.028,0,0,0-24,24V496H96V360.667A48.078,48.078,0,0,1,136,408v16h32V248a16,16,0,0,1,32,0V424h32V336a16,16,0,0,1,32,0v88h32V352a16,16,0,0,1,32,0v72h32V368a16,16,0,0,1,32,0V496h32V368A48.055,48.055,0,0,0,376,320Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil braille';
-->
