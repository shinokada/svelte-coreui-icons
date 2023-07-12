<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif cm" 
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
 viewBox="0 0 301 201">
  <g fill="none">
    <path fill="#007A5E" d="M.5.5h100v200H.5z"/>
    <path fill="#CE1126" d="M100.5.5h100v200h-100z"/>
    <path fill="#FCD116" d="M200.5.5h100v200h-100zM125.138 92.26l15.675 11.388-5.987 18.426 15.674-11.388 15.674 11.388-5.987-18.426 15.675-11.388H156.4l-5.9-18.427-5.899 18.427z"/>
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
