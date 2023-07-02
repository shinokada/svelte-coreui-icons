<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cib gravatar';
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
		d="M16 0c-1.765 0-3.197 1.432-3.197 3.197v11.204c0 1.765 1.432 3.197 3.197 3.197s3.197-1.432 3.197-3.197v-7.453c3.729 1.317 6.401 4.869 6.401 9.052 0 5.297-4.301 9.599-9.599 9.599s-9.599-4.296-9.599-9.599c0-2.651 1.072-5.052 2.812-6.787 1.251-1.249 1.251-3.281 0-4.531-1.249-1.251-3.281-1.251-4.531 0-2.891 2.901-4.683 6.901-4.683 11.317 0 8.839 7.161 16 16 16s16-7.161 16-16c0-8.839-7.161-16-16-16z"
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
