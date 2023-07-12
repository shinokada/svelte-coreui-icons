<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil level up" 
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
  <polygon fill="var(--ci-primary-color, {color})" points="80 384 80 416 296 416 296 78.627 380.687 163.314 403.313 140.686 280 17.373 156.687 140.686 179.313 163.314 264 78.627 264 384 80 384" />
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
