<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif ch" 
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
 viewBox="0 0 301 301">
  <g fill="none">
    <path fill="red" d="M.5.5h300v300H.5z"/>
    <path fill="#FFF" d="M56.75 122.375h187.5v56.25H56.75z"/>
    <path fill="#FFF" d="M122.375 56.75h56.25v187.5h-56.25z"/>
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
