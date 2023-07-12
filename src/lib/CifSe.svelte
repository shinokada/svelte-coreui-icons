<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif se" 
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
 viewBox="0 0 301 189">
  <g fill="none">
    <path fill="#005293" d="M.5.75h300v187.5H.5z"/>
    <path fill="#FECB00" d="M94.25.75h37.5v187.5h-37.5z"/>
    <path fill="#FECB00" d="M.5 75.75h300v37.5H.5z"/>
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
