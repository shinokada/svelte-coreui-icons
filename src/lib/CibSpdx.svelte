<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib spdx" 
</script>
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" {role}
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
 viewBox="0 0 32 32">
  <path d="M0 0v32h10.964l5.573-6.328v-8.073h8.766l6.698-6.635v-10.964zM6.932 6.932h18.391l-9.057 9.068c-4.979 4.984-9.115 9.068-9.193 9.068s-0.141-4.083-0.141-9.068zM18.135 18.667v13.333h13.865v-13.333z"/>
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
