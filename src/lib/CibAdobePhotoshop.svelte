<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib adobe photoshop';
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
    d="M0 0.401v31.198h32v-31.198zM1.333 1.734h29.333v28.531h-29.333zM7.734 7.708c0-0.089 0.188-0.156 0.297-0.156 0.859-0.042 2.12-0.068 3.438-0.068 3.698 0 5.135 2.026 5.135 4.62 0 3.391-2.458 4.844-5.469 4.844-0.51 0-0.682-0.026-1.036-0.026v5.125c0 0.109-0.042 0.156-0.151 0.156h-2.063c-0.109 0-0.151-0.042-0.151-0.151zM10.099 14.792c0.307 0.021 0.552 0.021 1.083 0.021 1.557 0 3.026-0.552 3.026-2.661 0-1.693-1.052-2.552-2.833-2.552-0.526 0-1.031 0.021-1.276 0.042zM21.578 13.203c-1.057 0-1.411 0.531-1.411 0.969 0 0.484 0.24 0.813 1.651 1.542 2.089 1.016 2.75 1.979 2.75 3.411 0 2.13-1.63 3.276-3.828 3.276-1.167 0-2.161-0.245-2.734-0.573-0.083-0.042-0.104-0.109-0.104-0.219v-1.958c0-0.13 0.063-0.177 0.151-0.109 0.833 0.552 1.802 0.792 2.682 0.792 1.057 0 1.495-0.438 1.495-1.036 0-0.484-0.307-0.901-1.646-1.604-1.896-0.906-2.688-1.828-2.688-3.37 0-1.719 1.344-3.146 3.672-3.146 1.146 0 1.953 0.177 2.396 0.37 0.109 0.068 0.13 0.177 0.13 0.266v1.828c0 0.109-0.068 0.177-0.198 0.13-0.594-0.349-1.469-0.573-2.323-0.573z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib adobe photoshop';
-->
