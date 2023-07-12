<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil house" 
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
  <path fill="var(--ci-primary-color, {color})" d="M408,406.545V248H288V406.545ZM320,280h56v94.545H320Z" />
  <path fill="var(--ci-primary-color, {color})" d="M271.078,33.749a34,34,0,0,0-47.066.984L32,226.745V496H144V336h64V496H480V225.958ZM448,464H240V304H112V464H64V240L249.412,57.356V57.3L448,240Z" />
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
