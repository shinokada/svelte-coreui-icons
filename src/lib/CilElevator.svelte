<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil elevator';
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
		d="M256,30.4,96,168.681V232H416V168.681ZM384,200H128V183.319L256,72.7,384,183.319Z"
	/>
	<path
		fill="var(--ci-primary-color, {color})"
		d="M96,343.319,256,481.6,416,343.319V280H96ZM128,312H384v16.681L256,439.3,128,328.681Z"
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
