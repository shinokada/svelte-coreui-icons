<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib inkscape';
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
    d="M15.828 0.255c-0.99-0.016-1.953 0.37-2.656 1.073l-11.766 12.047c-4.458 4.453 2.885 4.083 5.536 5.771 1.229 0.802-3.938 1.828-2.885 2.885 1.031 1.057 6.203 2.026 7.229 3.057 1.031 1.052-2.083 2.167-1.057 3.224 1 1.057 3.401 0.057 3.828 2.453 0.313 1.771 4.401 0.891 6.229-0.625 1.141-0.974-1.974-0.974-0.943-2.031 2.573-2.599 4.854-1.167 5.797-3.568 0.516-1.281-3.885-2.198-2.714-3.026 2.802-1.969 13.083-2.969 8.344-7.708l-12.198-12.479c-0.745-0.698-1.724-1.078-2.745-1.073zM15.927 1.401c0.708 0.005 1.417 0.266 1.927 0.776l4.656 4.745c0.432 0.427 0.432 1.313 0.172 1.568l-2.313-1.88-0.458 2.771-1.911-1.031-3.115 1.969-1.026-4.135-1.656 3.594-4.146-0.026c-0.797 0-0.682-0.828 0.146-1.656 1.625-1.802 4.797-4.854 5.797-5.911 0.516-0.531 1.219-0.786 1.927-0.781zM28.938 23.099c-0.99 0.036-1.995 0.531-2.255 1.443 0 0.599 4.656 0.943 4.401-0.141-0.188-0.917-1.156-1.339-2.146-1.302zM8.474 25.693c-1.344 0.078-2.781 1.057-1.641 2.016 1.052 0.917 2.656-0.198 3.167-1.479-0.318-0.422-0.911-0.573-1.521-0.531h-0.005zM26.115 25.797c-1.318 1.198 0.224 2.458 1.51 1.63 0.344-0.234-0.026-1.344-1.51-1.63z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib inkscape';
-->
