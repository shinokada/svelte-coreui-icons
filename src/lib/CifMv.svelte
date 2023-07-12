<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif mv" 
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
    <path fill="#D21034" d="M.5.5h300v200H.5z"/>
    <path fill="#007E3A" d="M50.5 50.5h200v100h-200z"/>
    <circle cx="163" cy="100.5" r="33.333" fill="#FFF"/>
    <circle cx="175.5" cy="100.5" r="33.333" fill="#007E3A"/>
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
