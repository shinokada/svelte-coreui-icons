<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil battery slash';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{role}
	{...$$restProps}
	aria-label={ariaLabel}
	fill={color}
	on:click
	on:keydown
	on:keyup
	on:focus
	on:blur
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:mouseout
	viewBox="0 0 512 512"
>
	<path
		fill="var(--ci-primary-color, {color})"
		d="M432,176V119.59A23.825,23.825,0,0,0,408,96H163.882l32,32H400v80h64V312H416v32h80V176Z"
	/>
	<path
		fill="var(--ci-primary-color, {color})"
		d="M150.627,128l-32-32-80-80H16V38.627L73.373,96H39.986a23.825,23.825,0,0,0-24,23.59V400.41a23.825,23.825,0,0,0,24,23.59H401.373l72,72H496V473.373L266.563,243.937ZM47.986,392V128h57.387l264,264Z"
	/>
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
