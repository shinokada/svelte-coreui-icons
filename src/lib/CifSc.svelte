<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif sc" 
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
    <path fill="#D62828" d="M.5.5h300v150H.5z"/>
    <path fill="#FCD856" d="M.5.5h200l-200 150z"/>
    <path fill="#FFF" d="M300.5 50.5v100H.5z"/>
    <path fill="#003F87" d="M.5.5h100l-100 150z"/>
    <path fill="#007A3D" d="M.5 150.5h300v-50z"/>
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
