<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil window maximize" 
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
  <path fill="var(--ci-primary-color, {color})" d="M472,48H40.335a24.027,24.027,0,0,0-24,24V456a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V72A24.027,24.027,0,0,0,472,48Zm-8,32v71.981L48.335,151.49V80ZM48.335,448V183.49L464,183.981V448Z" />
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
