<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif am" 
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
    <path fill="#D90012" d="M.5.5h300v150H.5z"/>
    <path fill="#0033A0" d="M.5 50.5h300v50H.5z"/>
    <path fill="#F2A800" d="M.5 100.5h300v50H.5z"/>
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
