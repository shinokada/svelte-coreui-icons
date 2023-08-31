<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let size = '32';
  export let ariaLabel = 'cil yen';
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
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="396.641 97.81 371.359 78.19 256.413 226.312 148.938 78.587 123.062 97.413 238.438 256 152.471 256 152.471 288 240 288 240 322.823 152.471 322.823 152.471 354.823 240 354.823 240 432 272 432 272 354.823 359.529 354.823 359.529 322.823 272 322.823 272 288 359.529 288 359.529 256 273.879 256 396.641 97.81"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let size = '32';
@prop export let ariaLabel = 'cil yen';
-->
