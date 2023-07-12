<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib reverbnation" 
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
  <path d="M32 12.432l-12.193-0.041-3.843-11.631-3.771 11.631-12.152 0.041 9.823 7.141-3.807 11.667h0.036l9.948-7.183 9.86 7.183-3.808-11.641 9.907-7.177z"/>
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
