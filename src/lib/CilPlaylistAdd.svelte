<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil playlist add" 
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
  <rect width="208" height="32" x="256" y="152" fill="var(--ci-primary-color, {color})" />
  <rect width="288" height="32" x="176" y="256" fill="var(--ci-primary-color, {color})" />
  <rect width="288" height="32" x="176" y="360" fill="var(--ci-primary-color, {color})" />
  <polygon fill="var(--ci-primary-color, {color})" points="192 152 128 152 128 88 96 88 96 152 32 152 32 184 96 184 96 248 128 248 128 184 192 184 192 152" />
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
