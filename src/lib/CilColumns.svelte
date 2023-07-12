<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil columns" 
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
  <path fill="var(--ci-primary-color, {color})" d="M472,48H40A24.028,24.028,0,0,0,16,72V448a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V72A24.028,24.028,0,0,0,472,48Zm-8,32v64H48V80ZM48,176H240V440H48ZM272,440V176H464V440Z" />
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
