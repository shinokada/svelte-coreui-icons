<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib dynatrace';
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
    d="M12.495 0c-0.411 0.010-1.24 0.12-2.026 0.87-1.161 1.099-6.964 6.609-9.297 8.823-1.052 1.005-0.958 2.125-0.958 2.219v0.505c0.089-0.391 0.25-0.667 0.568-1.104 0.661-0.818 1.734-1.047 2.172-1.094 2.891-0.391 5.792-0.635 8.703-0.734 5.781-0.182 9.599 0.302 9.599 0.302l8.109-7.724c0 0-4.25-0.802-9.094-1.37-2.495-0.302-5.005-0.531-7.516-0.682-0.026 0-0.12-0.016-0.26-0.010zM30.578 3.344l-8.089 7.719c0 0 0.297 3.844-0.182 9.599-0.255 3.266-0.781 6.49-1.167 8.656-0.068 0.438-0.344 1.49-1.234 2.13-0.385 0.26-0.656 0.391-0.995 0.479 2.057-0.677 1.453-9.396 1.453-9.396-5.781 0.182-9.62-0.292-9.62-0.292l-8.109 7.719c0 0 4.292 0.849 9.135 1.396 2.745 0.318 6.448 0.573 6.974 0.615 0.026 0 0.057-0.005 0.089-0.016-0.016 0.005-0.031 0.016-0.047 0.016 0.182 0 0.344 0.021 0.505 0.021 0.115 0 1.234 0.141 2.286-0.865 2.328-2.214 8.109-7.745 9.25-8.844 1.052-1.005 0.964-2.125 0.964-2.24-0.005-2.516-0.099-5.031-0.276-7.536-0.323-4.87-0.938-9.161-0.938-9.161zM5.141 11.073c-2.307 0.005-4.677 0.276-4.927 1.359 0.021 1.625 0.068 4.188 0.271 7.042 0.323 4.87 0.938 9.182 0.938 9.182l8.109-7.719c-0.021 0.021-0.318-3.844 0.161-9.599 0 0-2.245-0.271-4.552-0.266z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib dynatrace';
-->
