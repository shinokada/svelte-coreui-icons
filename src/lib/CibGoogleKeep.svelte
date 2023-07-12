<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cib google keep" 
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
  <path d="M26.661 10.661c0-5.859-4.801-10.661-10.661-10.661s-10.661 4.803-10.661 10.661c0 3.401 1.599 6.521 4.26 8.536v10.641h2.161v2.161h8.48v-2.161h2.161v-10.641c2.681-2 4.26-5.156 4.26-8.536zM11.74 27.697v-2.099h8.52v2.099zM11.74 23.437v-2.099h8.52v2.099zM20.74 17.76l-0.48 0.319v1.119h-8.52v-1.119l-0.459-0.319c-2.401-1.599-3.803-4.239-3.803-7.099 0-4.697 3.803-8.521 8.521-8.521s8.521 3.803 8.521 8.521c0 2.86-1.401 5.521-3.803 7.099z"/>
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
