<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let width;
  export let height;
  export let ariaLabel = 'cif fi';
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
  viewBox="0 0 301 185"
>
  <g fill="none">
    <path fill="#FFF" d="M.5.833h300v183.333H.5z" />
    <path fill="#003580" d="M.5 67.5h300v50H.5z" />
    <path fill="#003580" d="M83.834.833h50v183.333h-50z" />
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
@prop export let ariaLabel = 'cif fi';
-->
