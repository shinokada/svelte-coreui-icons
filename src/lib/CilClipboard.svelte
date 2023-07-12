<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil clipboard" 
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
  <path fill="var(--ci-primary-color, {color})" d="M432,56H376V88h48V464H88V88h48V56H80A24.028,24.028,0,0,0,56,80V472a24.028,24.028,0,0,0,24,24H432a24.028,24.028,0,0,0,24-24V80A24.028,24.028,0,0,0,432,56Z" />
  <path fill="var(--ci-primary-color, {color})" d="M192,140H320a24.028,24.028,0,0,0,24-24V16H168V116A24.028,24.028,0,0,0,192,140Zm8-92H312v60H200Z" />
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
