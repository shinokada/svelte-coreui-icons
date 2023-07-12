<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif bo" 
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
 viewBox="0 0 301 205">
  <g fill="none">
    <path fill="#007934" d="M.5.227h300v204.545H.5z"/>
    <path fill="#F9E300" d="M.5.227h300v136.364H.5z"/>
    <path fill="#D52B1E" d="M.5.227h300v68.182H.5z"/>
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
