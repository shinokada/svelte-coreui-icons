<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib rss" 
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
  <path d="M25.599 32c0-14.042-11.557-25.599-25.599-25.599v-6.401c17.552 0 32 14.448 32 32zM4.385 23.219c2.422 0 4.396 1.974 4.396 4.396 0 2.417-1.984 4.385-4.406 4.385-2.417 0-4.375-1.964-4.375-4.385s1.969-4.396 4.385-4.396zM21.214 32h-6.224c0-8.224-6.766-14.995-14.99-14.995v-6.219c11.635 0 21.214 9.578 21.214 21.214z"/>
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
