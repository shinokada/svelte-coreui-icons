<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let width;
	export let height;
	export let ariaLabel = 'cif ie';
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
	viewBox="0 0 301 151"
>
	<g fill="none">
		<path fill="#009B48" d="M.5.5h100v150H.5z" />
		<path fill="#FFF" d="M100.5.5h100v150h-100z" />
		<path fill="#FF7900" d="M200.5.5h100v150h-100z" />
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
