<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif lc" 
</script>
<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" {role}
{...$$restProps}
aria-label="{ariaLabel}"
fill="{color}"
on:click
on:keydown
on:keyup
on:focus
on:blur
on:mouseenter
on:mouseleave
on:mouseover
on:mouseout
 viewBox="0 0 301 151">
  <g fill="none">
    <path fill="#6CF" d="M.5.5h300v150H.5z"/>
    <path fill="#FFF" d="M100.5 137.5l50-7 50 7-50-123.5z"/>
    <path fill="#000" d="M107.25 137.5l43.25-7 43.25 7-43.25-107z"/>
    <path fill="#FCD116" d="M100.5 137.5h100l-50-62z"/>
  </g>
</svg>

<!--
@component
[Go to Document](https://shinokada.github.io/svelte-coreui-icons/)
## Props
@prop role = 'img';
@prop width || height;
@prop ariaLabel='file name'
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
