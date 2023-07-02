<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil camera roll';
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
		d="M328,104a32.036,32.036,0,0,0-32-32H280V48a32.036,32.036,0,0,0-32-32H96A32.036,32.036,0,0,0,64,48V72H48a32.036,32.036,0,0,0-32,32V464a32.036,32.036,0,0,0,32,32H296a32.036,32.036,0,0,0,32-32V440H496V136H328Zm136,64V408H296v56H48V104H96V48H248v56h48v64Z"
	/>
	<rect width="40" height="40" x="392" y="200" fill="var(--ci-primary-color, {color})" />
	<rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, {color})" />
	<rect width="40" height="40" x="248" y="200" fill="var(--ci-primary-color, {color})" />
	<rect width="40" height="40" x="392" y="336" fill="var(--ci-primary-color, {color})" />
	<rect width="40" height="40" x="320" y="336" fill="var(--ci-primary-color, {color})" />
	<rect width="40" height="40" x="248" y="336" fill="var(--ci-primary-color, {color})" />
	<rect width="40" height="40" x="176" y="200" fill="var(--ci-primary-color, {color})" />
	<rect width="40" height="40" x="176" y="336" fill="var(--ci-primary-color, {color})" />
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
