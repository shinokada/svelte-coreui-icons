<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib stitcher" 
</script>
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" {role}
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
 viewBox="0 0 32 32">
  <path d="M23.974 9.25h-0.479v13.5h0.479zM22.979 10.75h-0.479v10.5h0.479zM21.49 10.75h-21.49v10.5h21.49zM32 10.75h-6.010v10.5h6.010zM24.99 10.75h-0.479v10.5h0.479z"/>
</svg>

<!--
@component
[Go to Document](https://shinokada.github.io/svelte-coreui-icons/)
## Props
@prop role = 'img';
@prop size = '32';
@prop color = 'currentColor'
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
