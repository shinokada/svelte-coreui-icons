<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib zalando';
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
    d="M6.375 32c-1.177 0-1.813-0.266-2.161-0.479-0.479-0.281-1.359-1-2.161-3.109-1.406-3.984-2.099-8.188-2.052-12.411 0.026-4.88 0.786-9.016 2.052-12.401 0.802-2.13 1.682-2.854 2.161-3.13 0.349-0.188 0.984-0.469 2.161-0.469 0.438 0 0.958 0.042 1.573 0.135 4.099 0.76 8.026 2.25 11.599 4.396h0.016c3.63 2.083 6.865 4.797 9.542 8.016 1.417 1.76 1.589 2.891 1.589 3.453s-0.172 1.693-1.589 3.453c-2.677 3.214-5.911 5.922-9.542 8h-0.016c-3.573 2.151-7.5 3.641-11.599 4.401-0.615 0.104-1.135 0.146-1.573 0.146z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib zalando';
-->
