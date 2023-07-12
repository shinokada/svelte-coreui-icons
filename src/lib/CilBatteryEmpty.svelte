<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil battery empty" 
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
  <path fill="var(--ci-primary-color, {color})" d="M39.986,424H408a23.825,23.825,0,0,0,24-23.59V344h64V176H432V119.59A23.825,23.825,0,0,0,408,96H39.986a23.825,23.825,0,0,0-24,23.59V400.41A23.825,23.825,0,0,0,39.986,424Zm8-296H400v80h64V312H400v80H47.986Z" />
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
