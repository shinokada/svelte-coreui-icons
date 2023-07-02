<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil exposure';
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
		d="M456,40H56A16,16,0,0,0,40,56V456a16,16,0,0,0,16,16H456a16,16,0,0,0,16-16V56A16,16,0,0,0,456,40ZM72,72H417.373L72,417.373ZM440,440H94.627L440,94.627Z"
	/>
	<polygon
		fill="var(--ci-primary-color, {color})"
		points="336 368 336 408 368 408 368 368 408 368 408 336 368 336 368 296 336 296 336 336 296 336 296 368 336 368"
	/>
	<rect width="112" height="32" x="112" y="136" fill="var(--ci-primary-color, {color})" />
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
