<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let width;
  export let height;
  export let ariaLabel = 'cif ne';
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
  viewBox="0 0 301 259"
>
  <g fill="none">
    <path fill="#0DB02B" d="M.5.928h300v257.143H.5z" />
    <path fill="#FFF" d="M.5.928h300v171.429H.5z" />
    <path fill="#E05206" d="M.5.928h300v85.714H.5z" />
    <circle cx="150.5" cy="129.5" r="36.429" fill="#E05206" />
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
@prop export let ariaLabel = 'cif ne';
-->
