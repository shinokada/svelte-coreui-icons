<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib hulu" 
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
  <path d="M19.197 9.807h-4.807c-0.943 0.016-1.875 0.199-2.751 0.543v-10.391h-7.719v32.083h7.729v-12.681c-0.067-1.204 0.876-2.229 2.084-2.267h4.52c1.152 0 2.095 0.923 2.12 2.079v12.787h7.704v-13.907c0-5.88-3-8.213-7.865-8.213z"/>
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
