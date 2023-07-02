<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil cast';
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
	<path fill="var(--ci-primary-color, {color})" d="M16,360h0v64H80A64,64,0,0,0,16,360Z" />
	<path
		fill="var(--ci-primary-color, {color})"
		d="M472,80H40a24.028,24.028,0,0,0-24,24v72H48V112H464V392H264v32H472a24.028,24.028,0,0,0,24-24V104A24.028,24.028,0,0,0,472,80Z"
	/>
	<path
		fill="var(--ci-primary-color, {color})"
		d="M16,216v32c97.047,0,176,78.953,176,176h32C224,309.309,130.691,216,16,216Z"
	/>
	<path
		fill="var(--ci-primary-color, {color})"
		d="M16,288v32A104.118,104.118,0,0,1,120,424h32C152,349.009,90.991,288,16,288Z"
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
