<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib smashingmagazine';
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
    d="M10.313 16.005c1.021 0.698 2.214 1.344 3.609 1.922 2.38 0.99 3.979 1.849 4.802 2.583 0.818 0.729 1.24 1.661 1.24 2.802-0.010 1.943-1.365 2.922-4.104 2.922-2.635 0-5-0.839-7.099-2.5l-2.495 5.578c1.896 1.016 3.438 1.677 4.63 1.995l0.188 0.047-2.396 0.552c-1.693 0.391-3.385-0.672-3.776-2.359l-4.828-20.88c-0.391-1.693 0.667-3.385 2.365-3.781l5.833-1.344c-0.214 0.208-0.411 0.422-0.589 0.646l-0.026 0.026c-1.005 1.266-1.51 2.823-1.51 4.677 0 2.802 1.375 5.156 4.109 7.063l0.057 0.036zM24.125 16.099c-1.12-0.896-2.542-1.693-4.323-2.38-2.641-1.047-4.359-1.88-5.161-2.5-0.797-0.62-1.219-1.307-1.219-2.073 0-1.948 1.219-2.922 3.682-2.922 2.719 0 4.859 0.661 6.38 1.969l2.021-5.438c-1.464-0.745-2.979-1.281-4.542-1.625l-0.078-0.016c-0.344-0.083-0.703-0.161-1.083-0.219l3.5-0.807c1.703-0.38 3.38 0.682 3.781 2.365l4.839 20.859c0.38 1.703-0.677 3.401-2.375 3.781l-3.979 0.922c1.094-1.401 1.656-3.12 1.656-5.161 0-2.099-0.583-3.88-1.74-5.359-0.38-0.464-0.823-0.901-1.344-1.344l-0.057-0.036z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib smashingmagazine';
-->
