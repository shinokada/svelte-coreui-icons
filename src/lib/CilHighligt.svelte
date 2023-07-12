<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil highligt" 
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
  <path fill="var(--ci-primary-color, {color})" d="M104,305.5l88,48V480H320V353.5l88-48V160H104ZM136,192H376v94.5l-88,48V448H224V334.5l-88-48Z" />
  <rect width="32" height="72" x="240" y="32" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="72" x="82.544" y="50.544" fill="var(--ci-primary-color, {color})"  transform="rotate(-45 98.545 86.544)"/>
  <rect width="72" height="32" x="377.456" y="70.544" fill="var(--ci-primary-color, {color})"  transform="rotate(-45 413.453 86.545)"/>
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
