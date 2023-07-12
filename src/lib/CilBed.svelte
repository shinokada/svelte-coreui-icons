<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil bed" 
</script>
<svg xmlns="http://www.w3.org/2000/svg" width="{size}"
height="{size}" {role}
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
 viewBox="0 0 512 512">
  <path fill="var(--ci-primary-color, {color})" d="M416,224H208V344.619H185.846v-41A87.716,87.716,0,0,0,98.229,216H48V152H16V496H48V448.257l416,3.328V496h32V304A80.091,80.091,0,0,0,416,224ZM48,248H98.229a55.68,55.68,0,0,1,55.617,55.617v41H48ZM464,419.584,48,416.256V376.619H464Zm0-74.965H240V256H416a48.055,48.055,0,0,1,48,48Z" />
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
