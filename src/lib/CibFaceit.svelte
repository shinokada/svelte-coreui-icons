<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib faceit" 
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
  <path d="M32 3.599c0-0.13-0.135-0.266-0.135-0.266-0.13 0-0.13 0-0.266 0.135-2.667 4.13-5.464 8.266-8.13 12.531h-23.203c-0.266 0-0.401 0.401-0.13 0.531 9.599 3.604 23.599 9.068 31.333 12.135 0.266 0.135 0.531-0.135 0.531-0.266z"/>
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
