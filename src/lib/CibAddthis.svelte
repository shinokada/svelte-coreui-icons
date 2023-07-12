<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib addthis" 
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
  <path d="M24 17.995h-6v5.979h-4v-5.979h-6v-3.984h6v-5.984h4v5.984h6zM28 0.052h-24c-2.203 0.005-3.99 1.786-4 3.99v23.922c0.010 2.198 1.797 3.979 4 3.984h24c2.203-0.005 3.99-1.786 4-3.984v-23.922c-0.010-2.203-1.797-3.984-4-3.99z"/>
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
