<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib qgis';
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
    d="M17.172 17.344v4.865l-4.005-4.063v-4.661h4.776l3.802 3.859zM31.688 27.484v4.516h-4.875l-7.635-7.865v-4.734h4.469zM17.25 25.552l4.495 4.495c-1.745 0.589-3.406 0.969-5.766 0.969-9.13 0-15.979-6.693-15.979-15.594 0-8.859 6.849-15.422 15.979-15.422 9.172 0 16.021 6.604 16.021 15.422 0 2.823-0.698 5.432-1.943 7.677l-4.833-4.969c0.214-0.875 0.323-1.771 0.318-2.672 0-5.719-4.193-10.036-9.464-10.036s-9.667 4.318-9.667 10.036c0 5.724 4.443 10.135 9.667 10.135 0.729 0 0.88 0.021 1.172-0.042z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib qgis';
-->
