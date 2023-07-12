<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif sn" 
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
    <path fill="#00853F" d="M.5.5h100v200H.5z"/>
    <path fill="#FDEF42" d="M100.5.5h100v200h-100z"/>
    <path fill="#E31B23" d="M200.5.5h100v200h-100z"/>
    <path fill="#00853F" d="M118.798 90.199l19.593 14.235-7.484 23.033 19.593-14.235 19.593 14.235-7.484-23.033 19.593-14.235h-24.218L150.5 67.166l-7.484 23.033z"/>
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
