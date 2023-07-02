<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cib stackexchange';
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
		d="M28.969 20.771v1.38c0 2.339-1.859 4.234-4.13 4.234h-1.208l-5.438 5.615v-5.615h-11.031c-2.271 0-4.13-1.896-4.13-4.24v-1.375zM3.031 13.953h25.766v5.302h-25.766zM3.031 7.094h25.766v5.307h-25.766zM24.766 0c2.245 0 4.031 1.896 4.031 4.24v1.375h-25.766v-1.375c0-2.344 1.865-4.24 4.135-4.24z"
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
