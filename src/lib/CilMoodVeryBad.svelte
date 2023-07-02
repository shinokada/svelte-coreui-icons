<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil mood very bad';
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
		d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
	/>
	<path
		fill="var(--ci-primary-color, {color})"
		d="M256,280A104,104,0,0,0,152,384H360A104,104,0,0,0,256,280Z"
	/>
	<rect
		width="32.001"
		height="96.333"
		x="148"
		y="159.834"
		fill="var(--ci-primary-color, {color})"
		transform="rotate(-48.366 164.002 208.001)"
	/>
	<rect
		width="96.333"
		height="32"
		x="291.834"
		y="192"
		fill="var(--ci-primary-color, {color})"
		transform="rotate(-48.366 340.002 208)"
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
