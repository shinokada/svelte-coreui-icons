<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil indent increase';
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
	<rect width="424" height="32" x="72" y="63.998" fill="var(--ci-primary-color, {color})" />
	<rect width="296" height="32" x="200" y="151.998" fill="var(--ci-primary-color, {color})" />
	<rect width="296" height="32" x="200" y="239.998" fill="var(--ci-primary-color, {color})" />
	<rect width="296" height="32" x="200" y="327.998" fill="var(--ci-primary-color, {color})" />
	<rect width="424" height="32" x="72" y="415.998" fill="var(--ci-primary-color, {color})" />
	<path
		fill="var(--ci-primary-color, {color})"
		d="M16,144.909V367.091L171.527,256Zm32,62.182L116.473,256,48,304.909Z"
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
