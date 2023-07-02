<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let width;
	export let height;
	export let ariaLabel = 'cif tl';
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
	viewBox="0 0 300 150"
>
	<g fill="none">
		<path fill="#D82727" d="M0 0h300v150H0z" />
		<path fill="#FFC71F" d="M0 0l150.226 75L0 150z" />
		<path fill="#000" d="M0 0l74.933 75L0 150z" />
		<path
			fill="#FFF"
			d="M33.499 65.953l15.823-6.594-8.698 14.932 10.969 12.943-16.854-4.09L25.703 98 24.31 80.57 7.433 76.78l15.948-6.606-1.351-17.276z"
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
