<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil spreadsheet" 
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
  <path fill="var(--ci-primary-color, {color})" d="M16,64V456H496V64ZM464,424H48V96H464Z" />
  <rect width="88" height="32" x="88" y="136" fill="var(--ci-primary-color, {color})" />
  <rect width="88" height="32" x="88" y="208" fill="var(--ci-primary-color, {color})" />
  <rect width="88" height="32" x="88" y="280" fill="var(--ci-primary-color, {color})" />
  <rect width="88" height="32" x="88" y="352" fill="var(--ci-primary-color, {color})" />
  <rect width="136" height="32" x="288" y="136" fill="var(--ci-primary-color, {color})" />
  <rect width="136" height="32" x="288" y="208" fill="var(--ci-primary-color, {color})" />
  <rect width="136" height="32" x="288" y="280" fill="var(--ci-primary-color, {color})" />
  <rect width="136" height="32" x="288" y="352" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="216" y="136" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="216" y="208" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="216" y="280" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="216" y="352" fill="var(--ci-primary-color, {color})" />
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
