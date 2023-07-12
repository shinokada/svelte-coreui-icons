<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil object group" 
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
  <path fill="var(--ci-primary-color, {color})" d="M304,136H128V288h80v88H384V224H304ZM160,256V168H272v88H160Zm192,0v88H240V288h64V256Z" />
  <path fill="var(--ci-primary-color, {color})" d="M400,48H112V16H16v96H48V400H16v96h96V464H400v32h96V400H464V112h32V16H400ZM48,48H80V80H48ZM80,464H48V432H80Zm384,0H432V432h32ZM432,48h32V80H432Zm0,352H400v32H112V400H80V112h32V80H400v32h32Z" />
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
