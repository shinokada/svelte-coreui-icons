<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil wc';
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
    d="M132,139.824A61.912,61.912,0,1,0,70.088,77.912,61.981,61.981,0,0,0,132,139.824ZM132,48a29.912,29.912,0,1,1-29.912,29.912A29.947,29.947,0,0,1,132,48Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M176,152H88a48.053,48.053,0,0,0-48,48V352H72V496H192V352h32V200A48.053,48.053,0,0,0,176,152Zm16,168H160V464H104V320H72V200a16.019,16.019,0,0,1,16-16h88a16.019,16.019,0,0,1,16,16Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M370.088,139.824a61.912,61.912,0,1,0-61.912-61.912A61.981,61.981,0,0,0,370.088,139.824Zm0-91.824a29.912,29.912,0,1,1-29.912,29.912A29.947,29.947,0,0,1,370.088,48Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M425.759,193.354a61.586,61.586,0,0,0-115.833-1.392L248,357.1V400h64v96H416V400h64V349.3ZM448,368H384v96H344V368H280v-5.1l59.889-159.7a29.585,29.585,0,0,1,55.645.669L448,354.7Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil wc';
-->
