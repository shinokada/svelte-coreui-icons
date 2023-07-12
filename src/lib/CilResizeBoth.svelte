<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil resize both" 
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
  <path fill="var(--ci-primary-color, {color})" d="M404.687,212.686l-50.51,50.51L248.805,157.823l50.841-50.843L272.666,80H80V272l27.313,27.314,50.982-50.981L263.667,353.706l-51.313,51.313L239.333,432H432V240ZM400,400H262.627l46.3-46.294L158.295,203.078,112,249.373V112H249.373L203.55,157.823,354.177,308.451,400,262.627Z" />
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
