<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil https" 
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
  <path fill="var(--ci-primary-color, {color})" d="M400,200H388V144a128,128,0,0,0-256,0v56H120a24.028,24.028,0,0,0-24,24V472a24.028,24.028,0,0,0,24,24H400a24.028,24.028,0,0,0,24-24V224A24.028,24.028,0,0,0,400,200ZM164,144a96,96,0,0,1,192,0v56H164ZM392,464H128V232H392Z" />
  <rect width="40" height="40" x="240" y="328" fill="var(--ci-primary-color, {color})" />
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
