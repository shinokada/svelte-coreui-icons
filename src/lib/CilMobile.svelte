<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil mobile" 
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
  <path fill="var(--ci-primary-color, {color})" d="M380,16H132a32.036,32.036,0,0,0-32,32V464a32.036,32.036,0,0,0,32,32H380a32.036,32.036,0,0,0,32-32V48A32.036,32.036,0,0,0,380,16Zm0,32V80H132V48Zm0,64,.011,224H132V112Zm0,352H132V368H380.016l0,96Z" />
  <rect width="32" height="32" x="240" y="400" fill="var(--ci-primary-color, {color})" />
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
