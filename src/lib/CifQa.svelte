<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif qa" 
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
 viewBox="0 0 301 119">
  <g fill="none">
    <path fill="#8D1B3D" d="M.5.445h300v118.11H.5z"/>
    <path fill="#FFF" d="M.5.445v118.11h94.488l24.003-6.558-24.003-6.57 24.003-6.558-24.003-6.558 24.003-6.57-24.003-6.558 24.003-6.558-24.003-6.57 24.003-6.558-24.003-6.558 24.003-6.57-24.003-6.558 24.003-6.558-24.003-6.57 24.003-6.558-24.003-6.558 24.003-6.57L94.988.439H.5z"/>
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
