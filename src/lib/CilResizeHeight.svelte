<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil resize height" 
</script>
<svg xmlns="http://www.w3.org/2000/svg" width="{size}"
height="{size}" {role}
{...$$restProps}
aria-label="{ariaLabel}"
fill="{color}"
on:click
on:keydown
on:keyup
on:focus
on:blur
on:mouseenter
on:mouseleave
on:mouseover
on:mouseout
 viewBox="0 0 512 512">
  <path fill="var(--ci-primary-color, {color})" d="M256.236,504,120,367.764V329.608h72v-144H120V146.98L255.766,11.216,392,147.452v38.156H320v144h72v38.627ZM159.1,361.608l97.137,97.137,97.137-97.137H288v-208h64.9L255.766,56.471l-97.138,97.137H224v208Z" />
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
