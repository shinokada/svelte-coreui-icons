<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let width;
	export let height;
	export let ariaLabel = 'cif tt';
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
	viewBox="0 0 301 181"
>
	<g fill="none">
		<path fill="#CE1126" d="M.5.5h300v180H.5z" />
		<path fill="#FFF" d="M.5.5l208.248 180H300.5L92.253.5z" />
		<path fill="#000" d="M15.792.5l208.247 180h61.169L76.961.5z" />
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
