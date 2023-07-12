<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif gr" 
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
  <g fill="none" fill-rule="evenodd">
    <path fill="#0D5EAF" fill-rule="nonzero" d="M.5.5h300v200H.5z"/>
    <path stroke="#FFF" stroke-width="{width}" d="M56.056.5v122.222M.5 56.055h111.111m0-22.222H300.5M111.611 78.278H300.5M.5 122.722h300M.5 167.167h300"/>
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
