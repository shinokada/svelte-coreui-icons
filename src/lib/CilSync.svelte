<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil sync';
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
		d="M410.168,133.046,381.21,104.088,464.017,104l-.034-32L328,72.144V208h32V128.132l27.541,27.541A152.5,152.5,0,0,1,279.972,416l.056,32a184.5,184.5,0,0,0,130.14-314.954Z"
	/>
	<path
		fill="var(--ci-primary-color, {color})"
		d="M232.028,104l-.056-32a184.5,184.5,0,0,0-130.14,314.954L130.878,416H48v32H184V312H152v79.868l-27.541-27.541A152.5,152.5,0,0,1,232.028,104Z"
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
