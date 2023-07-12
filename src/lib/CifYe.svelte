<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif ye" 
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
 viewBox="0 0 300 200">
  <g fill="none">
    <path fill="#FFF" d="M0 0h300v200H0z"/>
    <path fill="#CE1126" d="M0 0h300v66.667H0z"/>
    <path fill="#000" d="M0 133.333h300V200H0z"/>
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
