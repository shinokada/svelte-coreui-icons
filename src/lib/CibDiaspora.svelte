<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib diaspora';
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
    d="M20.349 29.193l-3.109-4.339c-0.833-1.161-1.505-2.063-1.542-2.063s-1.339 1.75-3.089 4.151c-1.661 2.286-3.036 4.151-3.057 4.151-0.047 0-6-4.193-6.016-4.234-0.005-0.021 1.339-2 2.99-4.391 1.656-2.396 3.005-4.391 3.005-4.438 0-0.073-0.542-0.255-4.74-1.661l-4.792-1.599c-0.042-0.021 0.208-0.849 1.057-3.531 0.615-1.927 1.125-3.521 1.141-3.542s2.281 0.703 5.031 1.609c2.75 0.906 5.016 1.646 5.047 1.646s0.063-0.042 0.073-0.094c0.010-0.042 0.036-2.38 0.052-5.203 0.026-2.797 0.052-5.12 0.068-5.156 0.026-0.042 0.797-0.042 3.641-0.042 1.979 0 3.615 0.021 3.641 0.042 0.036 0.021 0.089 1.578 0.182 5.036 0.146 5.703 0.146 5.781 0.24 5.781 0.036 0 2.214-0.719 4.844-1.625 2.63-0.88 4.786-1.599 4.802-1.583 0.042 0.063 2.203 7.083 2.182 7.099-0.021 0.026-2.224 0.781-4.88 1.682-3.682 1.24-4.865 1.661-4.865 1.719-0.016 0.042 1.24 1.943 2.865 4.281 1.578 2.318 2.854 4.219 2.854 4.24-0.016 0.063-5.917 4.401-5.974 4.401-0.021 0-0.781-1.021-1.661-2.26l0.005-0.089z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib diaspora';
-->
