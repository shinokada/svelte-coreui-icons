<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib libreoffice';
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
    d="M21.818 0c-0.318-0.005-0.609 0.177-0.74 0.469-0.12 0.292-0.052 0.625 0.172 0.849l6.646 6.661c0.224 0.219 0.557 0.286 0.849 0.177 0.286-0.12 0.474-0.396 0.484-0.708v-6.677c-0.021-0.422-0.359-0.76-0.781-0.771zM3.547 0c-0.427 0.005-0.776 0.354-0.776 0.786v30.427c0 0.432 0.349 0.781 0.776 0.786h24.896c0.432 0 0.786-0.354 0.786-0.786v-19.594c0-0.208-0.083-0.411-0.229-0.557l-10.766-10.818c-0.151-0.156-0.349-0.24-0.563-0.245zM4.333 1.578h13.005l10.313 10.359v18.484h-23.318z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib libreoffice';
-->
