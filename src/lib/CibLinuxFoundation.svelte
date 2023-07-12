<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib linux foundation" 
</script>
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" {role}
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
 viewBox="0 0 32 32">
  <path d="M6.401 12.802v12.797h12.797v6.401h-19.198v-19.198zM32 0v32h-9.599v-6.401h3.198v-19.198h-19.198v3.198h-6.401v-9.599z"/>
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
