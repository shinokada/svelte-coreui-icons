<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil wallet" 
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
  <path fill="var(--ci-primary-color, {color})" d="M489.972,119.059a23.839,23.839,0,0,0-17-7.059H456V72a24.027,24.027,0,0,0-24-24H86.627A70.628,70.628,0,0,0,16,118.627V393.373A70.628,70.628,0,0,0,86.627,464h385.4a24.047,24.047,0,0,0,24-23.923l.944-303.995A23.837,23.837,0,0,0,489.972,119.059ZM464.053,432H86.627A38.627,38.627,0,0,1,48,393.373V118.627A38.627,38.627,0,0,1,86.627,80H424v32H88v32H464.947Z" />
  <rect width="32" height="32" x="392" y="264" fill="var(--ci-primary-color, {color})" />
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
