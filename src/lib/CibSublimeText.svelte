<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib sublime text';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {role}
  {...$$restProps}
  aria-label={ariaLabel}
  fill={color}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 32 32"
>
  <path
    d="M16 27.885h12.698c0.797 0 1.458-0.448 1.458-1v-2.557c-0.333 0.333-0.859 0.542-1.458 0.542h-25.391c-0.594 0-1.125-0.208-1.464-0.542v2.557c0 0.547 0.656 1 1.464 1zM16 29.823h13.922c1.146 0 2.078-0.688 2.078-1.526 0-0.068-0.010-0.135-0.021-0.198l-2.141-22.682c-0.068-0.531-0.474-0.953-0.927-1.125l1.62 19.203v3.391c0 0.76-0.818 1.38-1.839 1.38h-25.385c-1.010 0-1.839-0.625-1.839-1.38v-3.391l1.62-19.203c-0.453 0.177-0.859 0.599-0.927 1.125l-2.141 22.672c-0.016 0.068-0.021 0.13-0.021 0.203 0 0.839 0.927 1.531 2.073 1.531zM28.51 3.953l-0.036-0.422c0-0.026 0-0.047-0.005-0.078l-0.010-0.094c-0.083-0.672-0.635-1.188-1.443-1.188h-22.036c-0.802 0-1.354 0.51-1.438 1.182l-0.005 0.099-0.005 0.078-0.042 0.422-1.635 19.547c0 0.547 0.651 1 1.453 1h25.396c0.802 0 1.453-0.453 1.458-1zM20.927 16.359c-0.354 0.932-1.167 1.599-2.057 2-0.969 0.448-2.047 0.62-3.109 0.635-1.125 0.016-2.26-0.099-3.354-0.359-0.557-0.125-1.13-0.276-1.656-0.505-0.474-0.208-0.859-0.677-0.849-1.208 0.010-0.536 0.396-0.99 0.891-1.182 0.516-0.208 1.010-0.12 1.516 0.057 1.12 0.391 2.307 0.552 3.495 0.51 0.672-0.021 1.849-0.38 1.661-1.422-0.042-0.234-0.224-0.557-0.458-0.776-0.188-0.182-0.573-0.359-0.823-0.427-0.552-0.151-1.12-0.26-1.677-0.385-1.13-0.245-1.729-0.432-2.729-1.042-0.88-0.521-1.073-0.859-1.208-1.651-0.177-1.031 0.328-1.854 1.161-2.479 1.859-1.411 3.641-1.365 5.839-0.964 0.542 0.104 1.188 0.193 1.661 0.479 0.464 0.281 0.729 0.849 0.526 1.38-0.188 0.5-0.667 0.573-1.182 0.521-0.552-0.063-0.781-0.208-1.302-0.307-1.099-0.198-1.5-0.365-2.557-0.068-0.417 0.12-0.984 0.521-0.771 1.042 0.177 0.438 0.839 0.578 1.234 0.682 1.083 0.292 1.932 0.625 3.010 0.943 1.010 0.292 1.776 0.854 2.406 1.745 0.563 0.792 0.682 1.885 0.344 2.792z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib sublime text';
-->
