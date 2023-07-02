<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil wrap text';
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
	<rect width="160" height="32" x="16" y="232" fill="var(--ci-primary-color, {color})" />
	<rect width="392" height="32" x="16" y="392" fill="var(--ci-primary-color, {color})" />
	<path
		fill="var(--ci-primary-color, {color})"
		d="M408,72H16v32H408c30.878,0,56,28.71,56,64s-25.122,64-56,64H344.8V162.772L210,249l134.8,83.785V264H408c48.523,0,88-43.065,88-96S456.523,72,408,72ZM312.8,275.217,270,248.609,312.8,221.228Z"
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
