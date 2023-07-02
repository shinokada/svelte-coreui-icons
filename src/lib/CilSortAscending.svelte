<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil sort ascending';
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
	<polygon
		fill="var(--ci-primary-color, {color})"
		points="43.314 130.51 95.196 78.627 95.196 496.196 127.196 496.196 127.196 78.627 179.079 130.51 201.706 107.883 111.196 17.372 20.686 107.883 43.314 130.51"
	/>
	<rect width="120" height="32" x="184" y="160" fill="var(--ci-primary-color, {color})" />
	<rect width="184" height="32" x="184" y="232" fill="var(--ci-primary-color, {color})" />
	<rect width="248" height="32" x="184" y="304" fill="var(--ci-primary-color, {color})" />
	<rect width="312" height="32" x="184" y="376" fill="var(--ci-primary-color, {color})" />
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
