<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil barcode';
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
	<path fill="var(--ci-primary-color, {color})" d="M16,464H496V56H16ZM48,88H464V432H48Z" />
	<rect width="32" height="256" x="80" y="128" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="192" x="144" y="128" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="256" x="208" y="128" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="192" x="272" y="128" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="192" x="336" y="128" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="256" x="400" y="128" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="144" y="352" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="272" y="352" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="336" y="352" fill="var(--ci-primary-color, {color})" />
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
