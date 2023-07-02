<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let width;
	export let height;
	export let ariaLabel = 'cif is';
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
	viewBox="0 0 301 217"
>
	<g fill="none">
		<path fill="#003897" d="M.5.5h300v216H.5" />
		<path fill="#FFF" d="M84.5.5h48v216h-48m-84-132h300v48H.5" />
		<path fill="#D72828" d="M96.5.5h24v216h-24m-96-120h300v24H.5" />
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
