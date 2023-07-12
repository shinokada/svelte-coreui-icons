<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil chart line" 
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
  <polygon fill="var(--ci-primary-color, {color})" points="376 160 376 192 441.372 192 252 381.373 180 309.373 76.686 412.686 99.314 435.314 180 354.627 252 426.627 464 214.628 464 280 496 280 496 160 376 160" />
  <polygon fill="var(--ci-primary-color, {color})" points="48 104 16 104 16 496 496 496 496 464 48 464 48 104" />
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
