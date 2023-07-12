<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib google analytics" 
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
  <path d="M29.432 32h-26.905c-1.391 0-2.527-1.136-2.527-2.527v-5.895c0-1.391 1.136-2.527 2.527-2.527h7.577v-8.421c0-1.385 1.141-2.527 2.527-2.527h8.443v-7.536c0-1.407 1.161-2.568 2.567-2.568h5.792c1.407 0 2.568 1.161 2.568 2.568v26.864c0 1.407-1.161 2.568-2.568 2.568z"/>
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
