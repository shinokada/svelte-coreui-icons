<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let size = '32';
  export let ariaLabel = 'cil media pause';
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
    d="M200,48H72A24.028,24.028,0,0,0,48,72V440a24.028,24.028,0,0,0,24,24H200a24.028,24.028,0,0,0,24-24V72A24.028,24.028,0,0,0,200,48Zm-8,384H80V80H192Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M440,48H312a24.028,24.028,0,0,0-24,24V440a24.028,24.028,0,0,0,24,24H440a24.028,24.028,0,0,0,24-24V72A24.028,24.028,0,0,0,440,48Zm-8,384H320V80H432Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let size = '32';
@prop export let ariaLabel = 'cil media pause';
-->
