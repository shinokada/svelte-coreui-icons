<script>
export let color = "currentColor"
export let role="img";
export let width; export let height; export let ariaLabel="cif mk" 
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
    <path fill="#D20000" d="M.5.5h300v150H.5z"/>
    <path fill="#FFE600" d="M.5.5h45l105 72.321L255.5.5h45l-300 150h45l105-72.321 105 72.321h45L.5.5zm300 60v30l-300-30v30l300-30zm-165-60l15 64.286L165.5.5h-30zm0 150l15-64.286 15 64.286h-30z"/>
    <circle cx="150.5" cy="75.5" r="24.107" fill="#FFE600" stroke="#D20000" stroke-width="4.286"/>
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
