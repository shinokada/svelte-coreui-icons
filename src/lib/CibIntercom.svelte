<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib intercom';
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
    d="M28 0h-24c-2.208 0-4 1.792-4 4v24c0 2.208 1.792 4 4 4h24c2.208 0 4-1.792 4-4v-24c0-2.208-1.792-4-4-4zM20.266 5.865c0-0.583 0.479-1.068 1.068-1.068s1.068 0.484 1.068 1.068v14.25c0 0.589-0.479 1.068-1.068 1.068s-1.068-0.479-1.068-1.068zM14.932 5.323c0-0.583 0.479-1.063 1.068-1.063s1.068 0.479 1.068 1.063v15.474c0 0.583-0.479 1.063-1.068 1.063s-1.068-0.479-1.068-1.063zM9.599 5.865c0-0.583 0.479-1.068 1.068-1.068s1.068 0.484 1.068 1.068v14.25c0 0.589-0.479 1.068-1.068 1.068s-1.068-0.479-1.068-1.068zM4.266 8c0-0.589 0.479-1.068 1.068-1.068s1.068 0.479 1.068 1.068v9.594c0 0.589-0.479 1.068-1.068 1.068s-1.068-0.479-1.068-1.068zM27.359 24.271c-0.161 0.141-4.115 3.458-11.359 3.458s-11.198-3.318-11.359-3.458c-0.448-0.385-0.5-1.057-0.115-1.505 0.38-0.448 1.052-0.5 1.5-0.12 0.063 0.052 3.589 2.948 9.974 2.948 6.464 0 9.938-2.917 9.969-2.943 0.448-0.385 1.12-0.333 1.505 0.115s0.333 1.12-0.115 1.505zM27.734 17.594c0 0.589-0.479 1.068-1.068 1.068s-1.068-0.479-1.068-1.068v-9.594c0-0.589 0.479-1.068 1.068-1.068s1.068 0.479 1.068 1.068z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib intercom';
-->
