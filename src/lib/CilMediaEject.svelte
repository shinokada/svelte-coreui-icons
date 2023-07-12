<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil media eject" 
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
  <path fill="var(--ci-primary-color, {color})" d="M97.088,286.56H414.912a24,24,0,0,0,18.432-39.371L274.433,56.63a24,24,0,0,0-36.866,0h0L78.656,247.189A24,24,0,0,0,97.088,286.56ZM256,84.491,397.824,254.56H114.176Z" />
  <path fill="var(--ci-primary-color, {color})" d="M416,328H96a24.027,24.027,0,0,0-24,24v64a24.027,24.027,0,0,0,24,24H416a24.027,24.027,0,0,0,24-24V352A24.027,24.027,0,0,0,416,328Zm-8,80H104V360H408Z" />
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
