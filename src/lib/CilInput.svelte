<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil input" 
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
  <path fill="var(--ci-primary-color, {color})" d="M472,96H40a24.028,24.028,0,0,0-24,24v80H48V128H464V384H48V312H16v80a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Z" />
  <polygon fill="var(--ci-primary-color, {color})" points="212.687 323.078 235.313 345.705 325.824 255.196 235.313 164.686 212.687 187.314 264.568 239.196 16 239.196 16 271.195 264.569 271.195 212.687 323.078" />
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
