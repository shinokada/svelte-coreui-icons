<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil movie" 
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
  <path fill="var(--ci-primary-color, {color})" d="M136,488H495.985V24H16V488H136ZM408,56h55.985V96H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408ZM136,200V56H375.985V240H136Zm0,216V272H375.985V456H136ZM48,56h56V96H48Zm0,72h56v40H48Zm0,72h56v40H48Zm0,72h56v40H48Zm0,72h56v40H48Zm0,72h56v40H48Z" />
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
