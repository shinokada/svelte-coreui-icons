<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let size = '32';
  export let ariaLabel = 'cil tv';
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
    d="M472,88.5H302.627l72.5-72.5H329.873l-72.5,72.5h-2.246L182.627,16H137.373l72.5,72.5H40a24.028,24.028,0,0,0-24,24v296a24.028,24.028,0,0,0,24,24H152V496H376V432.5h96a24.028,24.028,0,0,0,24-24v-296A24.028,24.028,0,0,0,472,88.5ZM344,464H184V432.5H344Zm120-63.5H48v-280H464Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let size = '32';
@prop export let ariaLabel = 'cil tv';
-->
