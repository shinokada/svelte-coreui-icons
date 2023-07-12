<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif be" 
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
 viewBox="0 0 301 261">
  <g fill="none">
    <path fill="#000" d="M.5.5h300v260H.5z"/>
    <path fill="#FAE042" d="M100.5.5h100v260h-100z"/>
    <path fill="#ED2939" d="M200.5.5h100v260h-100z"/>
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
