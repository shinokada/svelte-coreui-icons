<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil double quote sans right" 
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
  <path fill="var(--ci-primary-color, {color})" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z" />
  <path fill="var(--ci-primary-color, {color})" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z" />
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
