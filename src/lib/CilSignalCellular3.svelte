<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil signal cellular 3" 
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
  <path fill="var(--ci-primary-color, {color})" d="M208.78,264h-.1v.1L16,456.78V496H496V16H456.78Zm-88.1,200H54.035l66.646-66.646Zm88,0h-56V365.354l56-56Zm88,0h-56V277.354l56-56ZM464,464H328.681V189.354L464,54.034Z" />
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
