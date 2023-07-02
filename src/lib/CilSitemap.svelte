<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil sitemap';
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
		d="M472,328H448V264a24.027,24.027,0,0,0-24-24H272V176h32a24.028,24.028,0,0,0,24-24V80a24.028,24.028,0,0,0-24-24H208a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24h32v64H88a24.027,24.027,0,0,0-24,24v64H40a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24h80a24.028,24.028,0,0,0,24-24V352a24.028,24.028,0,0,0-24-24H96V272H240v56H216a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24h80a24.028,24.028,0,0,0,24-24V352a24.028,24.028,0,0,0-24-24H272V272H416v56H392a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24h80a24.028,24.028,0,0,0,24-24V352A24.028,24.028,0,0,0,472,328ZM216,88h80v56H216ZM112,360v56H48V360Zm176,0v56H224V360Zm176,56H400V360h64Z"
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
