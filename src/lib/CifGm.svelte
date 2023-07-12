<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif gm" 
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
    <path fill="#CE1126" d="M.5.5h300v66.667H.5z"/>
    <path fill="#FFF" d="M.5 67.167h300v66.666H.5z"/>
    <path fill="#0C1C8C" d="M.5 78.278h300v44.444H.5z"/>
    <path fill="#3A7728" d="M.5 133.833h300V200.5H.5z"/>
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
