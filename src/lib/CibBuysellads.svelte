<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib buysellads" 
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
  <path d="M16 9.419l2.681 10.044h-5.362zM30 5v22c0 1.656-1.344 3-3 3h-22c-1.656 0-3-1.344-3-3v-22c0-1.656 1.344-3 3-3h22c1.656 0 3 1.344 3 3zM25.919 25.331l-5.906-18.669h-8.025l-5.906 18.669h5.669l6.981-5.725 1.512 5.725z"/>
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
