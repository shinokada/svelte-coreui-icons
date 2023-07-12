<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib y combinator" 
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
  <path d="M30 2v28h-28v-28zM16.75 17.969l4.844-9.094h-2.044l-2.863 5.688c-0.294 0.581-0.563 1.144-0.8 1.675l-0.762-1.675-2.825-5.688h-2.188l4.794 8.988v5.906h1.844z"/>
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
