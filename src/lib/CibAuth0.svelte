<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cib auth0';
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
		d="M29.307 9.932l-3.146-9.932h-20.365l-3.104 9.932c-1.802 5.75 0.042 12.271 5.089 16.021l8.229 6.047 8.208-6.068c5.005-3.75 6.911-10.25 5.089-16.021l-8.214 6.104 3.12 9.938-8.208-6.13-8.208 6.104 3.141-9.911-8.25-6.063 10.177-0.063 3.146-9.891 3.141 9.87z"
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
