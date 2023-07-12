<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil tablet" 
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
  <path fill="var(--ci-primary-color, {color})" d="M440,16H80A24.028,24.028,0,0,0,56,40V472a24.028,24.028,0,0,0,24,24H440a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,440,16Zm-8,448H88V368H432Zm0-128H88V48H432Z" />
  <rect width="32" height="32" x="232" y="400" fill="var(--ci-primary-color, {color})" />
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
