<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let size = '32';
  export let ariaLabel = 'cil image plus';
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
    d="M336,72V40H40V472H472V184H440v25.68l-64.769-64.77L306,214.142l-100-100-134,134V72Zm39.231,118.166L440,254.935v93.207L328.628,236.769ZM206,159.4l234,234V440H72V293.4Z"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="448 16 416 16 416 64 368 64 368 96 416 96 416 144 448 144 448 96 496 96 496 64 448 64 448 16"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let size = '32';
@prop export let ariaLabel = 'cil image plus';
-->
