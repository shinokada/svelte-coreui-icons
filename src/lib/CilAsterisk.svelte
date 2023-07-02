<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil asterisk';
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
	<polygon
		fill="var(--ci-primary-color, {color})"
		points="286.903 256 416 177.877 416 141.115 415.717 140.646 272 227.617 272 72 240 72 240 227.617 96.283 140.646 96 141.115 96 177.877 225.097 256 96 334.123 96 370.885 96.283 371.354 240 284.383 240 440 272 440 272 284.383 415.717 371.354 416 370.885 416 334.123 286.903 256"
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
