<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib seagate';
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
    d="M11.089 2.313c0.37-0.219 0.734-0.443 1.104-0.589 0.151 0.37 0.37 0.74 0.521 1.104-0.813 0.443-1.625 0.813-2.365 1.328-10.865 6.599-9.198 14.099-4.505 14.771 3.198 0.599 7.125-1.458 9.896-3.099 2.099-1.313 3.99-2.568 3.99-4.063 0-0.953-1.099-1.406-1.995-1.255-2.891 0.724-6.76 4.724-9.969 4.724-1.464 0-2.526-1.12-2.365-2.438 0.203-2.453 2.521-4.302 4.651-5.536 3.448-2.26 8.031-4.266 12.109-4.063 10.198 0.354 16.307 13.089-1.328 24.224-2 1.266-5.224 2.651-5.906 2.88-0.297-1.328-0.74-2.661-1.031-3.99 3.224-1.521 4.193-1.708 7.75-4.432 2.995-2.391 5.87-5.219 6.354-9.083 0.073-0.885 0.073-1.698-0.151-2.583-1.198-4.12-6.76-8.365-17.203-1.401-1.089 0.635-2.88 1.917-2.88 3.172 0 0.297 0.219 0.667 0.516 0.74 1.604 0.688 5.177-2.922 8.714-4.135 2.771-0.979 5.568 0.063 6.057 2.51 0.073 0.667 0.073 1.328-0.146 1.922-0.792 2.057-2.703 3.547-4.656 4.802-2.042 1.12-4.115 2.719-8.641 3.911-3.083 0.844-7.021 0.385-8.641-2.365-0.661-1.031-0.958-2.286-0.958-3.469 0.073-1.406 0.37-2.807 0.958-4.063 1.036-2.141 2.583-4.063 4.432-5.609 1.76-1.547 3.693-2.885 5.76-3.99z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib seagate';
-->
