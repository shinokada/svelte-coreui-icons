<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib uikit" 
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
  <path d="M23.594 4.391l-5.474 3.318 6.313 3.594v9.438l-8.484 4.719-8.344-4.719v-7.313l-5.474-2.818v13.391l13.625 8 14.115-8v-15.995zM21.057 3.073l-5.307-3.073-5.531 3.422 5.375 2.958z"/>
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
