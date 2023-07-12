<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif kw" 
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
    <path fill="#007A3D" d="M.5.5h300v50H.5z"/>
    <path fill="#FFF" d="M.5 50.5h300v50H.5z"/>
    <path fill="#CE1126" d="M.5 100.5h300v50H.5z"/>
    <path fill="#000" d="M.5.5l75 50v50l-75 50z"/>
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
