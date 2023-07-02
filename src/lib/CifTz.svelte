<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let width;
	export let height;
	export let ariaLabel = 'cif tz';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
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
	<defs>
		<path id="a" d="M.5.5h300v200H.5z" />
		<path id="c" d="M.5.5h300v200H.5z" />
	</defs>
	<g fill="none" fill-rule="evenodd">
		<path fill="#1EB53A" fill-rule="nonzero" d="M.5.5h300l-300 200" />
		<path fill="#00A3DD" fill-rule="nonzero" d="M.5 200.5h300V.5" />
		<mask id="b" fill="#fff">
			<use xlink:href="#a" />
		</mask>
		<path stroke="#FCD116" stroke-width={width} d="M.5 200.5l300-200" mask="url(#b)" />
		<mask id="d" fill="#fff">
			<use xlink:href="#c" />
		</mask>
		<path stroke="#000" stroke-width={width} d="M.5 200.5l300-200" mask="url(#d)" />
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
