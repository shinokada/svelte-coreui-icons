<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil boat alt" 
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
  <path fill="var(--ci-primary-color, {color})" d="M410.866,181.063A32.1,32.1,0,0,0,380.793,160H341.554l-16-96H221.112l16,96H197.554l-16-96H77.112l16,96H48v88H16V448H443.727L496,282.466V248H435.207ZM298.446,96l10.667,64H269.554L258.888,96Zm-144,0,10.667,64H125.554L114.888,96ZM80,192H380.793l20.363,56H80Zm383.222,88L420.273,416H48V280Z" />
  <rect width="32" height="32" x="80" y="320" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="144" y="320" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="208" y="320" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="272" y="320" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="336" y="320" fill="var(--ci-primary-color, {color})" />
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
