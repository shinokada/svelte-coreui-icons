<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let width;
  export let height;
  export let ariaLabel = 'cif cu';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
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
  viewBox="0 0 301 151"
>
  <g fill="none">
    <path fill="#002A8F" d="M.5.5h300v150H.5z" />
    <path fill="#FFF" d="M.5 30.5h300v30H.5zM.5 90.5h300v30H.5z" />
    <path fill="#CF142B" d="M.5.5v150l129.902-75z" />
    <path
      fill="#FFF"
      d="M43.801 53L38.75 68.551H22.402l13.219 9.609-5.051 15.539L43.8 84.09l13.23 9.609-5.051-15.539 13.219-9.609H48.85z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let width;
@prop export let height;
@prop export let ariaLabel = 'cif cu';
-->
