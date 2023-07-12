<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif tn" 
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
    <path fill="#E70013" d="M.5.5h300v200H.5z"/>
    <circle cx="150.5" cy="100.5" r="50" fill="#FFF"/>
    <circle cx="150.5" cy="100.5" r="37.5" fill="#E70013"/>
    <circle cx="160.5" cy="100.5" r="30" fill="#FFF"/>
    <path fill="#E70013" d="M138 100.5l40.703-13.225-25.156 34.624V79.102l25.156 34.624z"/>
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
