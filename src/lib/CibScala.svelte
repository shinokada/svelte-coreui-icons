<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cib scala';
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
	viewBox="0 0 32 32"
>
	<path
		d="M6.12 32c6.047 0 18.411-2.021 19.76-4v-7.641c-1.276 1.88-13.714 3.885-19.76 3.885zM6.12 21.818c6.047 0 18.411-2.021 19.76-4v-7.635c-1.276 1.875-13.714 3.88-19.76 3.88zM6.12 11.641c6.047 0 18.411-2.021 19.76-4v-7.641c-1.276 1.875-13.714 3.88-19.76 3.88z"
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
