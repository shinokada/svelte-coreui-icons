<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let width;
  export let height;
  export let ariaLabel = 'cif ss';
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
    <path fill="#078930" d="M.5 105.5h300v45H.5z" />
    <path fill="#FFF" d="M.5 45.5h300v60H.5z" />
    <path fill="#000" d="M.5.5h300v45H.5z" />
    <path fill="#DA121A" d="M.5 53h300v45H.5z" />
    <path fill="#0F47AF" d="M.5.5l129.904 75L.5 150.5z" />
    <path fill="#FCDD09" d="M19.801 75.5l43.417 14.107-26.833-36.932v45.65l26.833-36.932z" />
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
@prop export let ariaLabel = 'cif ss';
-->
