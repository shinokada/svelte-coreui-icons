<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil mobile landscape" 
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
  <path fill="var(--ci-primary-color, {color})" d="M464,96H48a32.036,32.036,0,0,0-32,32V384a32.036,32.036,0,0,0,32,32H464a32.036,32.036,0,0,0,32-32V128A32.036,32.036,0,0,0,464,96ZM48,384V128H96V384.018l-48,0Zm80-256H384V384l-256,.013ZM464,384l-48,0V128h48Z" />
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
