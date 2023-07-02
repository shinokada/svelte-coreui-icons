<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil happy';
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
	<rect width="40" height="40" x="152" y="200" fill="var(--ci-primary-color, {color})" />
	<rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, {color})" />
	<path
		fill="var(--ci-primary-color, {color})"
		d="M338.289,307.2A83.6,83.6,0,0,1,260.3,360H251.7a83.6,83.6,0,0,1-77.992-52.8l-1.279-3.2H137.968L144,319.081A116,116,0,0,0,251.7,392H260.3A116,116,0,0,0,368,319.081L374.032,304H339.568Z"
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
