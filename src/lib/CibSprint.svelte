<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib sprint';
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
    d="M2.839 31.995c7.323-2.411 17.943-8.026 25.328-13.042 0.62-0.422 1.104-0.813 1.104-1.495 0-1.182-2.208-2.771-3.276-3.406-5.813 5.943-17.38 14.849-23.156 17.943zM9.635 26.948c4.516-3.073 11.078-8.854 13.297-11.995 0.526-0.74 0.911-1.167 0.911-1.943 0-1.271-1.505-2.198-2.589-2.849-2.594 6.016-8.417 13.5-11.62 16.786zM13.089 22.245c3.125-3.958 5.583-8.609 5.583-11.948 0-1.745-1.271-2.958-2.927-3.885 0.031 3.625-1.245 12.135-2.656 15.833zM13.75 18.427c0.583-3.797 0.24-8.38-0.505-11.255-0.406-1.568-1.839-3.333-3.167-3.885 1.74 4.859 3.234 11.776 3.672 15.141zM12.464 13.099c-1.37-3.635-4.781-11.219-9.797-13.099 3.266 3.547 8.109 10.578 9.797 13.099z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib sprint';
-->
