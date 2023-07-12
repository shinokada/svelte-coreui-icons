<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib nextdoor" 
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
  <path d="M31.99 13.089l-15.99-9.792-5.495 3.365v-3.365h-5.005v6.427l-5.495 3.365 2.615 4.271 2.88-1.755v13.099h21v-13.099l2.875 1.755 2.615-4.271z"/>
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
