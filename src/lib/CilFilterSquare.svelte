<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil filter square" 
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
  <path fill="var(--ci-primary-color, {color})" d="M472,16H40A24.027,24.027,0,0,0,16,40V472a24.027,24.027,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,472,16Zm-8,448H48V48H464Z" />
  <path fill="var(--ci-primary-color, {color})" d="M208,427h48.627L301,368.076V260.87L415,131.852V85H89v47.176L208,261.194ZM121,119.672V117H383v2.739L269,248.757V357.375L240.666,395H240V248.69Z" />
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
