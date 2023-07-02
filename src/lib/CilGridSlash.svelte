<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil grid slash';
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
		d="M464.453,395V63.547a16,16,0,0,0-16-16H117l32,32h26.847v26.847l32,32V79.547h96.3v96.3H245.3l32,32h26.847V234.7l32,32V207.849h96.3v96.3H373.606l32,32h26.847V363Zm-128.3-219.149v-96.3h96.3v96.3Z"
	/>
	<path
		fill="var(--ci-primary-color, {color})"
		d="M16,16.667V39.294L47.547,70.841V448.453a16,16,0,0,0,16,16H441.159l32.214,32.214H496V474.04L38.626,16.667ZM336.151,359.445l73.008,73.008H336.151Zm-128.3-128.3,73.008,73.008H207.849Zm0,105.008h96.3v96.3h-96.3Zm-128.3-233.31,73.008,73.008H79.547Zm0,105.008h96.3v96.3h-96.3Zm0,128.3h96.3v96.3h-96.3Z"
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
