<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let size = '32';
  export let ariaLabel = 'cil monitor';
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
    d="M472,16H40A24.028,24.028,0,0,0,16,40V376a24.028,24.028,0,0,0,24,24H240v64H160v32H352V464H272V400H472a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,472,16Zm-8,352H48V272H464Zm0-128H48V48H464Z"
  />
  <rect width="32" height="32" x="400" y="304" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let size = '32';
@prop export let ariaLabel = 'cil monitor';
-->
