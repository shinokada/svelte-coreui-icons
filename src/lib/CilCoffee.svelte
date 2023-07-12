<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil coffee" 
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
  <path fill="var(--ci-primary-color, {color})" d="M191.5,376h97A111.627,111.627,0,0,0,400,264.5V248h24a72,72,0,0,0,0-144H80V264.5A111.627,111.627,0,0,0,191.5,376ZM400,136h24a40,40,0,0,1,0,80H400Zm-288,0H368V264.5A79.589,79.589,0,0,1,288.5,344h-97A79.589,79.589,0,0,1,112,264.5Z" />
  <rect width="480" height="32" x="16" y="416" fill="var(--ci-primary-color, {color})" />
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
