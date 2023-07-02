<script>
	export let color = 'currentColor';
	export let role = 'img';
	export let size = '32';
	export let ariaLabel = 'cil hdr';
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
		d="M192,104V392h96a32.036,32.036,0,0,0,32-32V136a32.036,32.036,0,0,0-32-32Zm96,256H224V136h64Z"
	/>
	<polygon
		fill="var(--ci-primary-color, {color})"
		points="160 392 160 104 128 104 128 232 64 232 64 104 32 104 32 392 64 392 64 264 128 264 128 392 160 392"
	/>
	<path
		fill="var(--ci-primary-color, {color})"
		d="M480,232V136a32.036,32.036,0,0,0-32-32H352V392h32V264h29.167L440,331.081V392h32V324.919L447.632,264H448A32.036,32.036,0,0,0,480,232Zm-96,0V136h64v96Z"
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
