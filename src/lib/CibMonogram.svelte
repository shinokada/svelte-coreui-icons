<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib monogram" 
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
  <path d="M30.875 0v31.339c0 0.599-0.708 0.891-1.104 0.448l-28.645-31.787zM14.703 17.948l-12.473 13.839c-0.396 0.443-1.104 0.151-1.104-0.448v-31.339z"/>
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
