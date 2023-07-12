<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil audio spectrum" 
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
  <rect width="32" height="192" x="16" y="160" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="192" x="376" y="160" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="328" x="104" y="88" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="320" x="288" y="96" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="320" x="464" y="96" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="480" x="192" y="16" fill="var(--ci-primary-color, {color})" />
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
