<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil taxi';
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
		points="112 304 112 208 152 208 152 176 40 176 40 208 80 208 80 304 112 304"
	/>
	<polygon
		fill="var(--ci-primary-color, {color})"
		points="333.483 304 356 269.358 378.517 304 416.683 304 375.083 240 416.683 176 378.517 176 356 210.642 333.483 176 295.317 176 336.917 240 295.317 304 333.483 304"
	/>
	<rect width="32" height="128" x="440" y="176" fill="var(--ci-primary-color, {color})" />
	<rect width="432" height="32" x="40" y="104" fill="var(--ci-primary-color, {color})" />
	<rect width="432" height="32" x="40" y="344" fill="var(--ci-primary-color, {color})" />
	<path
		fill="var(--ci-primary-color, {color})"
		d="M241.337,280l8,24h33.731L240.4,176H194.448L155.009,304h33.484l7.4-24ZM217.72,209.146,230.671,248H205.748Z"
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
