<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil keyboard';
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
		d="M472,80H40a24.028,24.028,0,0,0-24,24V344a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V104A24.028,24.028,0,0,0,472,80Zm-8,256H48V112H464Z"
	/>
	<rect width="160" height="32" x="144" y="272" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="80" y="272" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="400" y="272" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="336" y="272" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="368" y="208" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="304" y="208" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="240" y="208" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="176" y="208" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="112" y="208" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="336" y="144" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="400" y="144" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="272" y="144" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="208" y="144" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="144" y="144" fill="var(--ci-primary-color, {color})" />
	<rect width="32" height="32" x="80" y="144" fill="var(--ci-primary-color, {color})" />
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
