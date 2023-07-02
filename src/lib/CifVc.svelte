<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let width;
	export let height;
	export let ariaLabel = 'cif vc';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
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
	viewBox="0 0 301 201"
>
	<g fill="none">
		<path fill="#0072C6" d="M.5.5h80v200H.5z" />
		<path fill="#FCD116" d="M75.5.5h225v200h-225z" />
		<path
			fill="#009E60"
			d="M225.5.5h75v200h-75zM133.834 142.167L150.5 175.5l16.667-33.333-16.667-33.334zM113 100.5l16.667 33.333 16.667-33.333-16.667-33.333zM154.667 100.5l16.667 33.333L188 100.5l-16.667-33.333z"
		/>
	</g>
</svg>

<!--
@component
[Go to Document](https://shinokada.github.io/svelte-coreui-icons/)
## Props
@prop role = 'img';
@prop width || height;
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
