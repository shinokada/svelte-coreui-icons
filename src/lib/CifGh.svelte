<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif gh" 
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
    <path fill="#006B3F" d="M.5.5h300v200H.5"/>
    <path fill="#FCD116" d="M.5.5h300v133.333H.5"/>
    <path fill="#CE1126" d="M.5.5h300v66.667H.5"/>
    <path fill="#000" d="M114.5 92.5h70.667L128.5 133.833 149.834 66.5l22.666 67.333"/>
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
