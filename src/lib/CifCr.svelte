<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif cr" 
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
 viewBox="0 0 301 181">
  <g fill="none">
    <path fill="#002B7F" d="M.5.5h300v180H.5z"/>
    <path fill="#FFF" d="M.5 30.5h300v120H.5z"/>
    <path fill="#CE1126" d="M.5 60.5h300v60H.5z"/>
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
