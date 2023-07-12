<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil paint" 
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
  <path fill="var(--ci-primary-color, {color})" d="M418.968,215.116A71.976,71.976,0,0,0,408.023,72H384V40a24.028,24.028,0,0,0-24-24H72A24.028,24.028,0,0,0,48,40V144a24.028,24.028,0,0,0,24,24H360a24.028,24.028,0,0,0,24-24V104h24.023a39.977,39.977,0,0,1,6.079,79.489L240,210.273V280H184V496H328V280H272V237.727ZM352,136H80V48H352ZM296,312V464H216V312Z" />
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
