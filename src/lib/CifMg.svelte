<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif mg" 
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
    <path fill="#FFF" d="M.5.5h300v200H.5z"/>
    <path fill="#FC3D32" d="M100.5.5h200v100h-200z"/>
    <path fill="#007E3A" d="M100.5 100.5h200v100h-200z"/>
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
