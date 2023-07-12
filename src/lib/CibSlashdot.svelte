<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib slashdot" 
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
  <path d="M26.37 0l-16.99 32h-6.891l16.984-32zM29.51 26.401c0 3.026-2.458 5.474-5.479 5.474-3.026 0-5.479-2.453-5.479-5.474s2.453-5.474 5.479-5.474c3.021 0 5.479 2.448 5.479 5.474z"/>
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
