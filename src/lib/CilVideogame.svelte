<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil videogame';
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
	<path fill="var(--ci-primary-color, {color})" d="M16,360H496V120H16ZM48,152H464V328H48Z" />
	<polygon
		fill="var(--ci-primary-color, {color})"
		points="152 184 120 184 120 224 80 224 80 256 120 256 120 296 152 296 152 256 192 256 192 224 152 224 152 184"
	/>
	<rect width="32" height="32" x="336" y="256" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="400" y="192" fill="var(--ci-primary-color, {color})" />
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
