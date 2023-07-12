<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil bold" 
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
  <path fill="var(--ci-primary-color, {color})" d="M16,496H496V16H16ZM48,48H464V464H48Z" />
  <path fill="var(--ci-primary-color, {color})" d="M341.6,242.986A79.956,79.956,0,0,0,280,112H112v32h40V368H112v32H320a79.991,79.991,0,0,0,21.6-157.014ZM208,144h48a48,48,0,0,1,0,96H208Zm88,224H208V272h88a48,48,0,0,1,0,96Z" />
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
