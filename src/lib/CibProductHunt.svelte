<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cib product hunt';
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
	viewBox="0 0 32 32"
>
	<path
		d="M20.394 13.675c0 1.281-1.044 2.325-2.325 2.325h-4.394v-4.65h4.394c1.281 0 2.325 1.044 2.325 2.325zM31.5 16c0 8.563-6.938 15.5-15.5 15.5s-15.5-6.938-15.5-15.5c0-8.563 6.938-15.5 15.5-15.5s15.5 6.938 15.5 15.5zM23.494 13.675c0-2.994-2.431-5.425-5.425-5.425h-7.494v15.5h3.1v-4.65h4.394c2.994 0 5.425-2.431 5.425-5.425z"
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
