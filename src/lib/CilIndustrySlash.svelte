<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil industry slash" 
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
  <polygon fill="var(--ci-primary-color, {color})" points="459.26 96 328 225.697 328 96 293.45 96 229.01 161.128 251.638 183.756 296 138.92 296 228.118 333.314 265.433 464 136.303 464 396.118 496 428.118 496 416 496 96 459.26 96" />
  <polygon fill="var(--ci-primary-color, {color})" points="168 16 88 16 83.882 16 168 100.118 168 16" />
  <rect width="32" height="32" x="136" y="304" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="136" y="376" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="216" y="304" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="216" y="376" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="296" y="376" fill="var(--ci-primary-color, {color})" />
  <path fill="var(--ci-primary-color, {color})" d="M38.627,16H16V496H496V473.373ZM48,464V70.627l88,88V248h32V190.627L441.373,464Z" />
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
